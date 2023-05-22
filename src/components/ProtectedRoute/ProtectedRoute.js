import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, isAuthorizing }) {
  if (!isAuthorizing) {
    return (
      isLoggedIn ? <Outlet /> : <Navigate to="/" />
    );
  };
  return;
};

export default ProtectedRoute;