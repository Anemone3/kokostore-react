import MenuIcon from "@/components/icons/MenuIcon";
import { CartIcon } from "@/components/icons/CartIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { useState } from "react";

const ProfilePicture = 'https://avatars.akamai.steamstatic.com/082ef5b418f2c0491ea318a18ea78012ed761899_full.jpg'

export const MainHeader = () => {
  const [navClass, setNavClass] = useState(
    "md:static hidden h-full  w-2/3 flex-col gap-y-6  p-8 font-bold md:mr-auto md:flex md:flex-row md:gap-4",
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute md:static md:bg-white  left-0 top-0 flex  bg-gray-300  h-full w-3/4 flex-col gap-y-6 bg-gray-300 p-8 font-bold md:mr-auto md:flex md:flex-row md:gap-4",
    );
  };

  const handleCloseMenu = () => {
    setNavClass(
      "hidden h-full  w-2/3 flex-col gap-y-6  p-8 font-bold md:static  md:mr-auto md:flex md:flex-row md:gap-4",
    );
  };

  return (
    <header className="container mx-auto flex items-center px-4 py-8">
      <button className="mr-auto md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <nav className={navClass}>
        <button className="md:hidden" onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <a href="#">Products</a>
        <a href="#">Category</a>
        <a href="#">About</a>
      </nav>

      <div className="flex place-items-center gap-5 ">
        <CartIcon />
        <img src={ProfilePicture} alt="profile user" className="w-10 rounded-full" />
      </div>
    </header>
  );
};
