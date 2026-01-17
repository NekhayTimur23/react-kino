import { createContext, useState, useEffect, ReactNode } from "react";

interface UserAcc {
  name: string;
  isLogined: boolean;
}

interface UserContextValue {
  userAcc: UserAcc;
  toggleUserAcc: (userName: string) => void;
  arrFaforites: string[];
  addMoviesInFavorite: (num: string) => void;
  removeMoviesInFavorite: (num: string) => void;
  searchFilter: string
  funcSearchFilter: (elem: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  //стейт по загрузке данных из localStorage
  const [userAcc, setUserAcc] = useState<UserAcc>(() => {
    const dateLocalStorage = localStorage.getItem("logined");
    return dateLocalStorage
      ? JSON.parse(dateLocalStorage)
      : { name: "Тимур", isLogined: false };
  });

  //отправляет изменения в localStorage
  useEffect(() => {
    localStorage.setItem("logined", JSON.stringify(userAcc));
  }, [userAcc]);

  //МАССИВ СОХРАНЕНИХ ФИЛЬМОВ
  const [arrFaforites, setArrFaforites] = useState<string[]>([]);

  //ФУНКЦИЯ ДОБАВЛЕНИЯ ФИЛЬМОВ В ИЗБРАНОЕ
  const addMoviesInFavorite = (id: string) => {
    setArrFaforites((elem) => {
      if (elem.includes(id)) {
        return elem;
      }
      return [...elem, id];
    });
  };

  //ФУНКЦИЯ УДАЛЕНИЯ ФИЛЬМОВ ИЗ ИЗБРАНОГО
  const removeMoviesInFavorite = (id: string) => {
    setArrFaforites((elem) => elem.filter((e) => e != id));
  };

  //проверка валидности имени при входе
  const toggleUserAcc = (userName: string) => {
    setUserAcc((state) => ({
      ...state,
      isLogined: state.name === userName,
    }));
  };

  const [searchFilter, setSearchFilter] = useState<string>('');

  const funcSearchFilter = (e: string) => {
    setSearchFilter(e);
  }



  return (
    <UserContext.Provider
      value={{
        userAcc,
        toggleUserAcc,
        addMoviesInFavorite,
        arrFaforites,
        removeMoviesInFavorite,
        searchFilter,
        funcSearchFilter
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
