import styles from "./Favofites.module.css";
import { useContext } from "react";
import {Title} from "../../components/Title/Title";
import { UserContext } from "../../context/user.context";
import { CARD_ARR } from "../../App.state";
import CardItemBlock from "../../components/CardItemBlock/CardItemBlock";
import CardItems from "../../components/CardItems/CardItems";
import cn from "classnames";

export function Favofites() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Ошибка");
  }

  const { arrFaforites } = context;

  const favoriteMovies = CARD_ARR.filter((el) => arrFaforites.includes(el.id));

  console.log(favoriteMovies);
  return (
    <div>
      <Title>Избранное</Title>
      <div className={cn(styles["card-section"])}>
        {favoriteMovies.length === 0 ? (
          <p>Список фильмов пуст</p>
        ) : (
          favoriteMovies.map((e) => (
            <CardItemBlock key={e.id}>
              <CardItems
                id={e.id}
                title={e.title}
                favorites={e.favorites}
                poster={e.poster}
              />
            </CardItemBlock>
          ))
        )}
      </div>
    </div>
  );
}
