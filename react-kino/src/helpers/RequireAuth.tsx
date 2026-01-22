import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStoreApp } from "../store/store";

export const RequireAuth = ({ children }: { children: ReactNode }) => {

  const userName = useSelector((s: RootStoreApp) => s.user.userName);


  if (!userName.isLogined) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return children;
};
