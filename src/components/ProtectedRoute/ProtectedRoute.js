import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, isAuthorizing }) {

  if (!isAuthorizing && isLoggedIn !== null) {
    return (
      isLoggedIn ? <Outlet /> : <Navigate to='/' />
    );
  };
  
  return;
};

export default ProtectedRoute;