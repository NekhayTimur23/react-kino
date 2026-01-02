import styles from "./InputSearchForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ChangeEvent, FormEvent, useState } from "react";

function InputSearchForm() {
  const [inputData, setInputData] = useState("");

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
