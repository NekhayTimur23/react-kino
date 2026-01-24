import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { getLogin, IinitialState, KEY_LOC } from "../store/user.slice";

export const RequireAuth = ({ children }: { children: ReactNode }) => {

  const data = localStorage.getItem(KEY_LOC);
  const dispatch = useDispatch<AppDispatch>();

  if (!data) {
    dispatch(getLogin());
    return;
  }
  
  const userName = JSON.parse(data) as IinitialState ;

  // const userName = useSelector((s: RootStoreApp) => s.user.userName);

  if (!userName.isLogined) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return children;
};
