import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePayment } from "../../hooks/usePayment";

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("paymentId");
  const payerId = searchParams.get("PayerID");
  const token = searchParams.get("token");

  const [completed, setCompleted] = useState(false);

  const { executePayment } = usePayment();

  const objectPayment = {
    paymentId,
    payerId,
    token,
  };

  console.log("objeto xd", objectPayment );

  const restPaypal = async () => {
    const prueba = await executePayment(objectPayment);
    console.log(prueba);
    
  };

  useEffect(() => {
    if (paymentId && payerId) {
      restPaypal();
      setCompleted(true)
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
