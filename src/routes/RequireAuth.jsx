import React from 'react'
import { Navigate } from "react-router-dom";
import SignIn from "../components/pages/SignIn";

const RequireAuth = ({ isLogged, children }) => {

  if (!isLogged) {
    return <Navigate to={<SignIn />} />;
  }
  return children;
};

export default RequireAuth;