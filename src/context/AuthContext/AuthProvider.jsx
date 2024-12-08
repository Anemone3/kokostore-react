import { createContext, useContext } from "react"
import {useUserAuth} from '../../hooks/useUserAuth'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {


    const { userAuth, login, logout,register, user } = useUserAuth();


  return (
      <AuthContext.Provider value={{ userAuth, login, logout, register,user }}>
        {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
    return useContext(AuthContext);
};
