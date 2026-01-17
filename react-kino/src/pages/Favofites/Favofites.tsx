import styles from "./Favofites.module.css";
import { useContext } from "react";
import { Title } from "../../components/Title/Title";
import { UserContext } from "../../context/user.context";
import CardItems from "../../components/CardItems/CardItems";
import cn from "classnames";
import { useRouteLoaderData } from "react-router-dom";
import type { SearchOfMoviesPropsJsonInterface } from "../SearchOfMovies/SearchOfMovies.props";

export function Favofites() {
  const {
    data: { description },
  } = useRouteLoaderData("root") as { data: SearchOfMoviesPropsJsonInterface };

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Ошибка");
  }

  const { arrFaforites } = context;

  const favoriteMovies = description.filter((el) =>
    arrFaforites.includes(el["#IMDB_ID"])
  );

  console.log(favoriteMovies);
  return (
    <div>
      <Title>Избранное</Title>
      <div className={cn(styles["card-section"])}>
        {favoriteMovies.length === 0 ? (
          <p>Список фильмов пуст</p>
        ) : (
          favoriteMovies.map((e) => (
            <CardItems
              key={e["#IMDB_ID"]}
              id={e["#IMDB_ID"]}
              title={e["#TITLE"]}
              favorites={e["#RANK"]}
              alt={e["#TITLE"]}
              src={e["#IMG_POSTER"]}
              year={e["#YEAR"]}
            />
          ))
        )}
      </div>
    </div>
  );
}
