import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext/AuthProvider";

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
