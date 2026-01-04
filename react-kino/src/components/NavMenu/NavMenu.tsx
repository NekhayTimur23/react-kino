import styles from "./NavMenu.module.css";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import { NavMenuProps } from "./NavMenu.props";
import { NavLink } from "react-router-dom";
import cn from "classnames";

function NavMenu({ exitAccount }: NavMenuProps) {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be used within UserProvider");
  }
  const { userAcc } = context;

  return (
    <div className={styles["nav-menu"]}>
      <ul className={styles["nav-menu_list"]}>
        <li>
          <NavLink className={({isActive}) => cn(styles[''],{
            [styles['active']]: isActive
          })} to="/">Поиск фильмов</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => cn(styles[''],{
            [styles['active']]: isActive
          })} to="/favofites">Мои фильмы</NavLink>
        </li>
        {userAcc.isLogined && (
          <li>
            <NavLink className={({isActive}) => cn(styles[''],{
            [styles['active']]: isActive
          })} to="/">{userAcc.name}</NavLink>
          </li>
        )}
        <li onClick={exitAccount}>
          <NavLink className={({isActive}) => cn(styles[''],{
            [styles['active']]: isActive
          })} to="/login">
            {userAcc.isLogined ? "Выйти" : "Войти"}
            <img src="/exit.svg" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
