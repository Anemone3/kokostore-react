import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { CartProvider } from "./context/CartContext";

export const App = () => {
  return (
    <CartProvider>
      <div className="flex h-screen flex-col overflow-hidden bg-gray-50">
        <div className="flex h-full flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex flex-1 flex-col overflow-hidden">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};
