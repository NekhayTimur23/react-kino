import { createContext, useState, useEffect, ReactNode } from "react";

interface UserAcc {
  name: string;
  isLogined: boolean;
}

interface UserContextValue {
  userAcc: UserAcc;
  toggleUserAcc: (userName: string) => void;
  arrFaforites: number[];
  addMoviesInFavorite: (num: number) => void;
  removeMoviesInFavorite: (num: number) => void;
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

  //МАССИВ СОХРАНЕНИХ ФИЛЬМОВ
  const [arrFaforites, setArrFaforites] = useState<number[]>([]);

  


  //ФУНКЦИЯ ДОБАВЛЕНИЯ ФИЛЬМОВ В ИЗБРАНОЕ
  const addMoviesInFavorite = (id: number) => {
    setArrFaforites((elem) => {
      if (elem.includes(id)) {
        return elem;
      }
      return [...elem, id];
    });
  };

  //ФУНКЦИЯ УДАЛЕНИЯ ФИЛЬМОВ ИЗ ИЗБРАНОГО
  const removeMoviesInFavorite = (id: number) => {
    setArrFaforites((elem) => elem.filter((e) => e != id));
  };

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
    <UserContext.Provider
      value={{
        userAcc,
        toggleUserAcc,
        addMoviesInFavorite,
        arrFaforites,
        removeMoviesInFavorite,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
