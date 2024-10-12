import { FiLayers } from "react-icons/fi";
import { ImHeart } from "react-icons/im";
const ProfilePicture =
  "https://avatars.akamai.steamstatic.com/082ef5b418f2c0491ea318a18ea78012ed761899_full.jpg";

export const Navbar = () => {
  return (
    <>
      <ul className="flex p-3 flex-col items-center justify-start gap-10 border-r-2 border-b-purple-200 pr-4 dark:border-black">
        <li className="text-[30px] mt-20 text-purple-200">
          <FiLayers />
        </li>
        <li className="text-[30px] text-purple-200">
          <ImHeart />
        </li>
        <li className="mt-auto">
          <img
            src={ProfilePicture}
            alt="profile user"
            className="w-10 rounded-full"
          />
        </li>
      </ul>
    </>
  );
};
