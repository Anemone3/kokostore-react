import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { CartProvider } from "./context/CartContext/CartContext";

export const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex h-screen flex-col overflow-hidden bg-gray-50">
          <div className="flex h-full flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
              <Outlet />
            </div>
          </div>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};
