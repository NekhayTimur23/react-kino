import styles from "./Authorization.module.css";
import cn from "classnames";
import { Title } from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreApp } from "../../store/store";
import { getLogin, userActions } from "../../store/user.slice";

export interface LoginType {
  email: {
    value: string;
  };
}

function Authorization() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const userName = useSelector((s: RootStoreApp) => s.user.userName);

  useEffect(() => {
    dispatch(getLogin());
  }, []);

  //ФУНКЦИЯ ОТПРАВКИ: вставляет полученые значения в переменные и проверяет значения с именем пользователя.
  const inputFormFn = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginType;
    const { email } = target;

    if (email.value === userName.name) {
      console.log("1", userName);
      dispatch(userActions.enterSite());
      navigate("/");
    }
  };


  return (
    <div
      className={cn(styles["authorization"], {
        [styles["dispNone"]]: userName.isLogined,
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
