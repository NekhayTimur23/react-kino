import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/user.context";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within UserProvider");
  }

  const { userAcc } = context;


  const jwt = userAcc.isLogined;
  if (!jwt) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return children;

};
