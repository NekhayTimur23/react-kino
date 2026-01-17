import styles from "./Layout.module.css";

import NavSection from "../../components/NavSection/NavSection";
import NavLeftSection from "../../components/NavLeftSection/NavLeftSection";
import NavRightSection from "../../components/NavRightSection/NavRightSection";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import { Outlet } from "react-router-dom";

function Layout() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within UserProvider");
  }

  const { userAcc, toggleUserAcc } = context;

  useEffect(() => {
    localStorage.setItem(
      "logined",
      JSON.stringify({ name: "Тимур", isLogined: false })
    );
  }, []);

  // ФУНКЦИЯ ВЫХОДА: проверяет валидность логина,выходит из акк, меняет значения контекста на false и отправляет значения в localStorage
  const exitAccount = () => {
    if (userAcc.isLogined) {
      toggleUserAcc("");
    }
  };

  return (
    <div className={styles["app"]}>
      <div>
        <NavSection>
          <NavLeftSection />
          <NavRightSection exitAccount={exitAccount} />
        </NavSection>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
