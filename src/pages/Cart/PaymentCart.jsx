import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthProvider";
import { usePayment } from "../../hooks/usePayment";

export const PaymentCart = ({ total, cart, clearCart }) => {
  const { user, logout } = useAuth();
  const { isPaymentLoading, paymentResponse, paymentCartPaypal } = usePayment();
  const navigate = useNavigate();
  const handlePayment = () => {
    console.log("click en button compra");

    paymentCartPaypal(cart, user.id)
      .then((data) => {
        if (data) {
          clearCart();
        }
      })
      .catch((error) => {
        if (error) {
          logout();
          navigate("/login");
        }
      });
  };

  return (
    <div className="w-full self-start rounded-lg bg-white p-6 shadow-md lg:w-1/3">
      <h2 className="mb-4 text-xl font-semibold">Summary</h2>

      <div className="mb-4 flex justify-between text-lg font-medium">
        <span>Total:</span>
        <span>$ {total}</span>
      </div>

      <button
        onClick={handlePayment}
        disabled={isPaymentLoading}
        className={`w-full rounded-lg bg-pink-500 py-2 font-semibold text-white transition duration-200 hover:bg-pink-600 ${
          isPaymentLoading ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {isPaymentLoading ? "Processing..." : "Proceed to Checkout"}
      </button>
    </div>
  );
};
