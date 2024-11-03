import { FiLayers } from "react-icons/fi";
import { ImHeart, ImCart } from "react-icons/im";
const ProfilePicture =
  "https://avatars.akamai.steamstatic.com/082ef5b418f2c0491ea318a18ea78012ed761899_full.jpg";

export const Navbar = () => {
  return (
      <div className="w-16 bg-white border-r border-gray-200 flex flex-col justify-between py-4">
        <div className="flex flex-col items-center space-y-4">
          <FiLayers className="w-6 h-6 text-pink-500  cursor-pointer" />
          <ImHeart className="w-6 h-6 text-gray-400  cursor-pointer" />
          <ImCart className="w-6 h-6 text-gray-400  cursor-pointer" />
        </div>
        {/* Profile */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <img src={ProfilePicture} alt="profile user" className="w-9 h-9 text-gray-600 rounded-full cursor-pointer" />
          </div>
        </div>
      </div>
  )
};
