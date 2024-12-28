import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedPayment = ({ children }) => {
    const [searchParams] = useSearchParams();
    const paymentId = searchParams.get("paymentId");
    const payerId = searchParams.get("PayerID");
    const tokenPaypal = searchParams.get("token");

    const navigate = useNavigate();

    useEffect(() => {
        if (!payerId || !paymentId || !tokenPaypal) {
            navigate("/", { replace: true }); 
        }
    }, [navigate, payerId, paymentId, tokenPaypal]); 

    if (!payerId || !paymentId || !tokenPaypal) {
        return null; 
    }

    return <>{children}</>;
};
