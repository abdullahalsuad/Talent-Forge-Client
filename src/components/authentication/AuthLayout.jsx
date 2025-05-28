import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import LoadingSpinner from "../loading/LoadingSpinner";

const AuthLayout = ({ children }) => {
  let { user, loading } = use(AuthContext);

  if (loading) <LoadingSpinner />;

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default AuthLayout;
