import { useEffect } from "react";
import { replace, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthProvider";

export const ProtectedAuth = ({ children }) => {
  const navigate = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/"), { replace: true };
    }
  });
  return <>{children}</>;
};
