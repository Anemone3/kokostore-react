import { useState } from "react";

const url_payment = "https://kokostore-express.onrender.com/order/create";
const url_payment_paypal =
  "https://kokostore-express.onrender.com/payments/create";
const url_payment_execute =
  "https://kokostore-express.onrender.com/payments/success";

export const usePayment = () => {
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [paymentResponse, setPaymentResponse] = useState({
    error: null,
    data: null,
    success: false,
    message: null,
  });

  const paymentCartPaypal = (cart, userId) => {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("auth_token");

      setIsPaymentLoading(true);

      fetch(url_payment, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          usuario_id: userId,
          metodo_pago: 1,
          cart: cart,
        }),
      })
        .then((response) =>
          response.json().then((data) => ({ status: response.status, data }))
        )
        .then(({ status, data }) => {
          if (status === 200) {
            setPaymentResponse({
              error: null,
              data: data.order,
              success: true,
              message: data.message,
            });
            resolve(data);
          } else {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("userData");
            setPaymentResponse({
              error: data.error,
              data: null,
              success: false,
              message: "No se encontró un token válido o expiró",
            });
            return reject("Token no encontrado");
          }
        })
        .catch((error) => {
          console.error("Error al realizar el pago:", error);
          setPaymentResponse({
            error: error.message,
            data: null,
            success: false,
            message: "Error al realizar el pago",
          });
          reject(error.message);
        })
        .finally(() => {
          setIsPaymentLoading(false);
        });
    });
  };

  const createPayment = async (orderId) => {
    const token = localStorage.getItem("auth_token");
    const response = await fetch(url_payment_paypal, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: orderId,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al realizar el pago");
    }

    const data = await response.json();

    return data;
  };

  const executePayment = async (object) => {

    const {paymentId, token, payerId,orderId ,total} = object;
    const userToken = localStorage.getItem("auth_token");


    try {
      if (!userToken || !paymentId) {
        throw new Error("User token faltante");
      }

      const response = await fetch(
        `https://kokostore-express.onrender.com/payments/success/${orderId}?paymentId=${paymentId}&token=${token}&PayerID=${payerId}&total=${total}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          }
        }
      );

      return response;
    } catch (error) {
      console.error("Error al realizar el pago:", error);
      setPaymentResponse({
        error: error.message,
        data: null,
        success: false,
        message: "Error al realizar el pago",
      });
    }
  };

  return {
    isPaymentLoading,
    paymentResponse,
    paymentCartPaypal,
    createPayment,
    executePayment,
  };
};
