import { useAuth } from "../../../context/AuthContext/AuthProvider";
import { useState } from "react";
import { LoginUser } from "./LoginUser";
import { RegisterUser } from "./RegisterUser";

export const AuthComponent = () => {
  const { userAuth, login, logout,register } = useAuth();
  const [selectedTab, setSelectedTab] = useState(true);

  return (
    <div className="m-auto  rounded-sm w-[450px] bg-white shadow-md">
      <div className="flex-1">
        <div className="flex justify-evenly gap-3">
          <div
            onClick={() => setSelectedTab(true)}
            className={`cursor-pointer ${selectedTab ? "border-b-2 border-pink-300" : "border-b-0"} px-4 py-2 transition-all`}
          >
            Sign'in
          </div>
          <div
            onClick={() => setSelectedTab(false)}
            className={`cursor - pointer ${!selectedTab ? "border-b-2 border-pink-300" : "border-b-0"} px-4 py-2 transition-all`}
          >
            Signup
          </div>
        </div>
        {selectedTab ? (
          <LoginUser login={login} userAuth={userAuth} setSelectedTab={setSelectedTab} />
        ) : (
            <RegisterUser setSelectedTab={setSelectedTab} login={login} register={register}/>
        )}
      </div>

      <div
        className={`flex-1 ${selectedTab ? "md:bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2jWl_OKH0M9CUdVVyYotwnfCcfkzwx3-AA&s)]" : ""} flex rounded-br-lg rounded-tr-lg bg-cover bg-center`}
      >
        {userAuth && JSON.stringify(userAuth.dataUser?.email)}
      </div>
    </div>
  );
};
