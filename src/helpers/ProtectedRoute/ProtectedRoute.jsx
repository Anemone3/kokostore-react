import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthProvider";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);

  return <>{children}</>;
};
