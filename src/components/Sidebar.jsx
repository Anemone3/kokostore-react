import { Heart, ShoppingCart, TvMinimal } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";



const ProfilePicture =
  "https://avatars.akamai.steamstatic.com/082ef5b418f2c0491ea318a18ea78012ed761899_full.jpg";
const qwe =
  "https://www.equalityhumanrights.com/sites/default/files/styles/avatar_wide/public/2023/user-icon.webp?itok=h30--j4O";
export const Sidebar = () => {
  const { cart } = useContext(CartContext);
  const navBarItems = [
    {
      icon: TvMinimal,
      path: "/",
      label: "Inicio",
    },
    {
      icon: ShoppingCart,
      path: "/cart",
      label: "Cart",
    },
    {
      icon: Heart,
      path: "/favoritos",
      label: "Favoritos",
    },
  ];

  return (
    <div className="flex w-16 flex-col justify-between border-r border-gray-200 bg-white py-4">
      <div className="flex flex-col items-center gap-3 space-y-4">
        {navBarItems.map(({ icon: Icon, path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-pink-50 text-pink-500"
                  : "text-gray-400 hover:bg-pink-50 hover:text-pink-500"
              }`
            }
          >
            <Icon className="h-6 w-6" />
            {label === "Cart" && cart.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-white text-xs font-semibold">
                {cart.length}
              </span>
            )}
            <span className="absolute left-full ml-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {label}
            </span>
          </NavLink>
        ))}
      </div>
      {/* Profile */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <NavLink
            key={'/profile'}
            to={'profile'}
          >
            <img
              src={ProfilePicture}
              alt="profile user"
              className="h-9 w-9 cursor-pointer rounded-full text-gray-600"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
