import { createContext, useState, useEffect, ReactNode } from "react";

interface UserAcc {
  name: string;
  isLogined: boolean;
}

interface UserContextValue {
  userAcc: UserAcc;
  toggleUserAcc: (userName: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userAcc, setUserAcc] = useState<UserAcc>(() => {
    const dateLocalStorage = localStorage.getItem("logined");
    return dateLocalStorage
      ? JSON.parse(dateLocalStorage)
      : { name: "Тимур", isLogined: false };
  });

  useEffect(() => {
    localStorage.setItem("logined", JSON.stringify(userAcc));
  }, [userAcc]);

  const toggleUserAcc = (userName: string) => {
    console.log(userAcc.name === userName);
    setUserAcc((state) => ({
      ...state,
      isLogined: state.name === userName,
    }));
  };

  return (
    <UserContext.Provider value={{ userAcc, toggleUserAcc }}>
      {children}
    </UserContext.Provider>
  );
};
