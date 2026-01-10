import styles from "./InputSearchForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { UserContext } from "../../context/user.context";

function InputSearchForm() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Контекст не загрузился");
  }

  const { funcSearchFilter } = context;

  const [inputData, setInputData] = useState("");

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    funcSearchFilter(inputData);
    setInputData("");
  };

  return (
    <>
      <form className={styles["input-form"]} onSubmit={formSubmit}>
        <Input
          type="text"
          onChange={inputChange}
          value={inputData}
          placeholder="Введите название"
        />
        <Button>Искать</Button>
      </form>
    </>
  );
}

export default InputSearchForm;
