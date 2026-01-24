import styles from "./Favofites.module.css";
import { Title } from "../../components/Title/Title";
import CardItems from "../../components/CardItems/CardItems";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreApp } from "../../store/store";
import { validArrFaforites } from "../../store/storage";

export function Favofites() {
  const description = useSelector((s: RootStoreApp) => s.movie.arrFaforites);
  const userName = useSelector((s: RootStoreApp) => s.user.userName.name);
  const dispatch = useDispatch<AppDispatch>();

  function nameValidWW() {
    const uniqueFilms = Object.values(description).reverse();
    const newFavorite = validArrFaforites(userName);
    if (!newFavorite) {
      return uniqueFilms;
    }
    return Object.values(newFavorite).reverse();
  }


  console.log("Favofites- name ", validArrFaforites(userName));

  return (
    <div>
      <Title>Избранное</Title>
      <div className={cn(styles["card-section"])}>
        {nameValidWW().length === 0 ? (
          <p>Список фильмов пуст</p>
        ) : (
          nameValidWW().map((e) => (
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
