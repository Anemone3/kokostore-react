import { useState } from "react";

const url_payment = "https://kokostore-express.onrender.com/order/create";

export const usePayment = () => {
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [paymentResponse, setPaymentResponse] = useState({
    error: null,
    data: null,
    success: false,
    message: null,
  });

  // const paymentCartPaypal = async (cart, userId) => {
  //   const token = localStorage.getItem("auth_token");

  //   if (!token) {
  //     localStorage.removeItem("auth_token");
  //     localStorage.removeItem("userData");
  //     setPaymentResponse({
  //       error: "Token no encontrado",
  //       data: null,
  //       success: false,
  //       message: "No se encontró un token válido",
  //     });
  //     return;
  //   }

  //   setIsPaymentLoading(true);

  //   try {
  //     const response = await fetch(url_payment, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         usuario_id: userId,
  //         metodo_pago: 1, // ID para PayPal
  //         cart: cart,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (response.status === 200) {
  //       setPaymentResponse({
  //         error: null,
  //         data: data.order,
  //         success: true,
  //         message: data.message,
  //       });
  //       return;
  //     }
  //     if(response.status === 401){
  //         localStorage.removeItem("auth_token");
  //         localStorage.removeItem("userData");
  //         setPaymentResponse({
  //           error: "Token no encontrado",
  //           data: null,
  //           success: false,
  //           message: "No se encontró un token válido",
  //         });
  //       return;
  //     }
  //   } catch (error) {
  //     console.error("Error al realizar el pago:", error);
  //     setPaymentResponse({
  //       error: error.message,
  //       data: null,
  //       success: false,
  //       message: "Error al realizar el pago",
  //     });
  //   } finally {
  //     setIsPaymentLoading(false); // Finaliza el estado de carga
  //   }
  // };

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
          response.json().then((data) => ({ status: response.status, data })),
        )
        .then(({ status, data }) => {
          if (status === 200) {
            setPaymentResponse({
              error: null,
              data: data.order,
              success: true,
              message: data.message,
            });
            resolve(data); // Resuelve la Promise si el pago fue exitoso
          }else {
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

  return {
    isPaymentLoading,
    paymentResponse,
    paymentCartPaypal,
  };
};
