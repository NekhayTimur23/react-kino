import styles from "./InputSearchForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { movieActions } from "../../store/movie.slice";

function InputSearchForm() {

  const dispatch = useDispatch<AppDispatch>()
  const [inputData, setInputData] = useState("");

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(movieActions.addNameSearchMovie(inputData))
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
