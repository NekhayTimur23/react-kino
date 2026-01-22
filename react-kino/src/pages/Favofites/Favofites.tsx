import styles from "./Favofites.module.css";
import { Title } from "../../components/Title/Title";
import CardItems from "../../components/CardItems/CardItems";
import cn from "classnames";
import { useSelector } from "react-redux";
import { RootStoreApp } from "../../store/store";

export function Favofites() {
  const description = useSelector((s: RootStoreApp) => s.movie.arrFaforites);
  const uniqueFilms = Object.values(description).reverse();

  return (
    <div>
      <Title>Избранное</Title>
      <div className={cn(styles["card-section"])}>
        {uniqueFilms.length === 0 ? (
          <p>Список фильмов пуст</p>
        ) : (
          uniqueFilms.map((e) => (
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
