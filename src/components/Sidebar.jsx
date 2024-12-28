import { Heart, ShoppingCart, TvMinimal } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext/CartContext";
import { useAuth } from "../context/AuthContext/AuthProvider";
import defaultAvatar from "../assets/images/default_avatar.svg";


export const Sidebar = () => {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate(); // Para redirigir a otras páginas
  const { logout, user } = useAuth();

  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const profileMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const [imageProfile, setImageProfile] = useState(defaultAvatar)

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

  useEffect(()=>{
    if(user){
      setImageProfile(user.profile_url)
    }else{
      setImageProfile(defaultAvatar)
    }
  },[user])


  // Detectar clic fuera del cuadro para cerrarlo
  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target)
    ) {
      setIsProfileMenuVisible(false);
    }
  };

  // Añadir el evento global para clics fuera
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleProfileMenu = () => {
    setIsProfileMenuVisible((prev) => !prev);
  };

  const handleProfileOption = (option) => {
    setIsProfileMenuVisible(false); // Cerrar el menú al hacer clic en una opción

    if (option === "profile") {
      navigate(`/profile/${user?.supabase_user_id}`);
    } else if (option === "login") {
      navigate("/login"); 
    } else if (option === "logout") {
      logout();
      window.location.reload(); 
    }
  };

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
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-xs font-semibold text-white">
                {cart.reduce((total, item) => total + Number(item.quantity), 0)}
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
          <img
            src={imageProfile}
            alt="profile user"
            onClick={toggleProfileMenu} // Al hacer clic, mostrar el menú
            className="h-9 w-9 cursor-pointer rounded-full text-gray-600"
          />
        </div>

        {/* Cuadro emergente de opciones */}
        {isProfileMenuVisible && (
          <div
            ref={profileMenuRef}
            className="absolute bottom-3.5 left-16 z-10 w-48 rounded-lg border border-gray-200 bg-white shadow-lg"
          >
            <ul>
              <li>
                <button
                  onClick={() => handleProfileOption("profile")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
                >
                  Perfil
                </button>
              </li>
              {!user ? (
                <li>
                  <button
                    onClick={() => handleProfileOption("login")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
                  >
                    Iniciar sesión
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => handleProfileOption("logout")}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-pink-100"
                  >
                    Cerrar sesión
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
