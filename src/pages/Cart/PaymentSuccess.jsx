import { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { usePayment } from "../../hooks/usePayment";

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("paymentId");
  const payerId = searchParams.get("PayerID");
  const token = searchParams.get("token");

  const [completed, setCompleted] = useState(false);

  const { executePayment } = usePayment();

  const storageItem = JSON.parse(localStorage.getItem("orderItem"))

  const objectPayment = {
    paymentId,
    token,
    payerId,
    orderId: storageItem.id,
    total: storageItem.monto_total,
  };


  const restPaypal = async () => {
    const response = await executePayment(objectPayment);
    if (response.ok){
      localStorage.removeItem("orderItem")
    }
  };

  useEffect(() => {
    if (paymentId && payerId) {
      restPaypal();
      setCompleted(true);
    }
  }, [payerId, paymentId]);

  return (
    <div>
      {completed ? (
        <>Pago completado exitosamente</>
      ) : (
        <>
          <h1>Error en el pago</h1>
        </>
      )}
    </div>
  );
};
