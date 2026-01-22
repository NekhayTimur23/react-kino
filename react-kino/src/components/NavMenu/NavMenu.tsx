import styles from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreApp } from "../../store/store";
import { userActions } from "../../store/user.slice";

function NavMenu() {
  const userName = useSelector((s: RootStoreApp) => s.user.userName);
  const arrFaforites = Object.values(
    useSelector((s: RootStoreApp) => s.movie.arrFaforites),
  );
  const dispatch = useDispatch<AppDispatch>();

  // ФУНКЦИЯ ВЫХОДА: проверяет валидность логина,выходит из акк, меняет значения контекста на false и отправляет значения в localStorage
  const exitAccount = () => {
    dispatch(userActions.exitSite());
  };


  return (
    <div className={styles["nav-menu"]}>
      <ul className={styles["nav-menu_list"]}>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], {
                [styles["active"]]: isActive,
              })
            }
            to="/"
          >
            Поиск фильмов
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(styles["navLink-favorites"], {
                [styles["active"]]: isActive,
              })
            }
            to="/favorites"
          >
            Мои фильмы
            {arrFaforites.length > 0 && (
              <div className={styles["span-favorites"]}>
                {`${arrFaforites.length}`}
              </div>
            )}
          </NavLink>
        </li>
        {userName.isLogined && (
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(styles[""], {
                  [styles["active"]]: isActive,
                })
              }
              to="/"
            >
              {userName.name}
            </NavLink>
          </li>
        )}
        <li onClick={exitAccount}>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], {
                [styles["active"]]: isActive,
              })
            }
            to="/login"
          >
            {userName.isLogined ? "Выйти" : "Войти"}
            <img src="/exit.svg" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
