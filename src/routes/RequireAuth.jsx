import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import SignIn from "../components/pages/SignIn";

const RequireAuth = ({ isLogged, children }) => {

  if (!isLogged) {
    return <Navigate to={<SignIn />} />;
  }
  return children ? children : <Outlet/>;
};

export default RequireAuth;