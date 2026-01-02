import styles from "./Authorization.module.css";
import cn from "classnames";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { AuthorizationProps } from "./Authorization.props";

function Authorization({
  inputRef,
  onChangeFn,
  inputFormFn,
  loginState,
}: AuthorizationProps) {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within UserProvider");
  }

  const { userAcc } = context;

  return (
    <div
      className={cn(styles["authorization"], {
        [styles["dispNone"]]: userAcc.isLogined,
      })}
    >
      <Title title="Войти" />
      <Input
        value={loginState}
        onChange={onChangeFn}
        ref={inputRef}
        type="text"
        placeholder="Ваше имя"
      />
      <Button onClick={inputFormFn}>Войти в профиль</Button>
    </div>
  );
}

export default Authorization;
