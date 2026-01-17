import styles from "./Authorization.module.css";
import cn from "classnames";
import { Title } from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";

export interface LoginType {
  email: {
    value: string;
  };
}

function Authorization() {
  const navigate = useNavigate();
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within UserProvider");
  }

  const { userAcc, toggleUserAcc } = context;

  const inputRef = useRef<HTMLInputElement | null>(null);

  // ФУНКЦИЯ ОТПРАВКИ: вставляет полученые значения в переменные и проверяет значения с именем пользователя.
  const inputFormFn = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginType;
    const { email } = target;
    if (email.value === userAcc.name) {
      toggleUserAcc(email.value);
      navigate("/");
    }
  };

  return (
    <div
      className={cn(styles["authorization"], {
        [styles["dispNone"]]: userAcc.isLogined,
      })}
    >
      <Title>Войти - Тимур</Title>
      <form
        action=""
        onSubmit={inputFormFn}
        className={cn(styles["authorization"])}
      >
        <Input name="email" ref={inputRef} type="text" placeholder="Ваше имя" />
        <Button>Войти в профиль</Button>
      </form>
    </div>
  );
}

export default Authorization;
