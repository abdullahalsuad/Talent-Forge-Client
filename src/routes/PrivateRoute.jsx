import { use } from "react";

import { Navigate, useLocation } from "react-router";

import LoadingSpinner from "../components/loading/LoadingSpinner";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  let { user, loading } = use(AuthContext);

  let location = useLocation();

  if (loading) return <LoadingSpinner />;

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
