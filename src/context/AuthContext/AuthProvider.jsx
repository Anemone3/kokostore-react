import { createContext, useContext } from "react"
import {useUserAuth} from '../../hooks/useUserAuth'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {


    const { userAuth, login, logout } = useUserAuth();


  return (
      <AuthContext.Provider value={{ userAuth, login, logout }}>
        {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
    return useContext(AuthContext);
};
