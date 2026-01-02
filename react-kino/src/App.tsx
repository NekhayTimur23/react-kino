import styles from "./App.module.css";

import NavSection from "./components/NavSection/NavSection";
import NavLeftSection from "./components/NavLeftSection/NavLeftSection";
import NavRightSection from "./components/NavRightSection/NavRightSection";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import SearchBox from "./components/SearchBox/SearchBox";
import InputSearchForm from "./components/InputSearchForm/InputSearchForm";
import CardSection from "./components/CardSection/CardSection";
import CardItemBlock from "./components/CardItemBlock/CardItemBlock";
import CardItems from "./components/CardItems/CardItems";
import Authorization from "./components/Authorization/Authorization";
import { CARD_ARR } from "./App.state";
import { useRef, useEffect, useContext, useState, ChangeEvent } from "react";
import { UserContext } from "./context/user.context";

function App() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within UserProvider");
  }
  const { userAcc, toggleUserAcc } = context;

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    localStorage.setItem(
      "logined",
      JSON.stringify({ name: "Тимур", isLogined: false })
    );
  }, []);

  // ФУНКЦИЯ ВВОДА значений в переменную
  const onChangeFn = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // ФУНКЦИЯ ОТПРАВКИ: вставляет полученые значения в переменные и проверяет значения с именем пользователя.
  const inputFormFn = () => {
    if (value === userAcc.name) {
      toggleUserAcc(value);
    }
  };

  // ФУНКЦИЯ ВЫХОДА: проверяет валидность логина,выходит из акк, меняет значения контекста на false и отправляет значения в localStorage
  const exitAccount = () => {
    if (userAcc.isLogined) {
      toggleUserAcc("");
      setValue("");
    }
  };

  return (
    <div className={styles["app"]}>
      <NavSection>
        <NavLeftSection />
        <NavRightSection exitAccount={exitAccount} />
      </NavSection>
      <Authorization
        inputRef={inputRef}
        onChangeFn={onChangeFn}
        inputFormFn={inputFormFn}
        loginState={value}
      />
      <Header>
        <Title title="Поиск" />
        <Paragraph />
        <SearchBox>
          <InputSearchForm />
        </SearchBox>
      </Header>
      <CardSection>
        {CARD_ARR.length === 0 ? (
          <p>Список фильмов пуст</p>
        ) : (
          CARD_ARR.map((e) => (
            <CardItemBlock key={e.id}>
              <CardItems
                title={e.title}
                favorites={e.favorites}
                poster={e.poster}
              />
            </CardItemBlock>
          ))
        )}
      </CardSection>
    </div>
  );
}

export default App;
