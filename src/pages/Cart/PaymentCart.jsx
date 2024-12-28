import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthProvider";
import { usePayment } from "../../hooks/usePayment";

export const PaymentCart = ({ total, cart, clearCart }) => {
  const { user, logout } = useAuth();
  const {
    isPaymentLoading,
    paymentResponse,
    createPayment,
    paymentCartPaypal,
  } = usePayment();
  const navigate = useNavigate();

  const handlePayment = async () => {
    console.log("click en button compra");

    if (user === null) {
      navigate("/login");
    } else {
      paymentCartPaypal(cart, user.id)
        .then(async (data) => {
          if (data) {
            console.log({ data });
            localStorage.setItem("orderItem", JSON.stringify(data.order));
            const response = await createPayment(data.order.id);
            window.location.href = response.redirectUrl;
            clearCart();
          }
        })
        .catch((error) => {
          if (error) {
            logout();
            navigate("/login");
          }
        });
    }
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
