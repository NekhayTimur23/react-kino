import styles from "./Authorization.module.css";
import cn from "classnames";
import { Title } from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ChangeEvent, useContext, useRef, useState } from "react";
import { UserContext } from "../../context/user.context";
import { NavLink } from "react-router-dom";

function Authorization() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within UserProvider");
  }

  const { userAcc, toggleUserAcc } = context;

  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  // ФУНКЦИЯ ВВОДА значений в переменную
  const onChangeFn = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  function checkName() {
    return value === userAcc.name;
  }

  const checkNames = checkName();

  // ФУНКЦИЯ ОТПРАВКИ: вставляет полученые значения в переменные и проверяет значения с именем пользователя.
  const inputFormFn = () => {
    if (checkNames) {
      toggleUserAcc(value);
    }
  };

  return (
    <div
      className={cn(styles["authorization"], {
        [styles["dispNone"]]: userAcc.isLogined,
      })}
    >
      <Title>Войти</Title>
      <Input
        value={value}
        onChange={onChangeFn}
        ref={inputRef}
        type="text"
        placeholder="Ваше имя"
      />
      <NavLink to={checkNames === true ? "/" : ""}>
        <Button onClick={inputFormFn}>Войти в профиль</Button>
      </NavLink>
    </div>
  );
}

export default Authorization;
