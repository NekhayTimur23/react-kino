import cn from "classnames";
import styles from "./ButtonVaforite.module.css";
import { ButtonVaforiteProps } from "./ButtonVaforite.props";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreApp } from "../../store/store";
import { getDiscription, movieActions } from "../../store/movie.slice";

export function ButtonVaforite({ id, className }: ButtonVaforiteProps) {
  const dispatch = useDispatch<AppDispatch>();
  //все карточки фильмов
  const description = Object.values(useSelector((s: RootStoreApp) => s.movie.movies));
  //избранные фильмы
  const arrFavorite = useSelector((s: RootStoreApp) => s.movie.arrFaforites);

  //возвращает обьект карточки фильма на который мы нажали
  const selectedFilm = description.find((el) => el["#IMDB_ID"] === id) || null;

  //возвращает тру или фолз если в избраном есть выбраная карточка
  const favoriteBoolean = Boolean(arrFavorite[id]);

  function addFaforite(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();

    if (!favoriteBoolean) {
      if (!selectedFilm) {
        return;
      }
      dispatch(movieActions.addFavoriteMovies(selectedFilm));
      dispatch(getDiscription({ tt: id }));
    } else {
      dispatch(movieActions.deleteFavoriteMovies(id));
    }
  }

  return (
    <button
      onClick={addFaforite}
      className={cn(styles["button-favotire"], className)}
    >
      <img
        className={cn(styles["button-favotire_img"])}
        src={favoriteBoolean ? "/public/favorite.svg" : "/public/like.svg"}
        alt="like"
      />
      <p
        className={cn(styles["button-favotire_button"], {
          [styles["favotire_button-on"]]: favoriteBoolean,
        })}
      >
        {favoriteBoolean ? "B избранное" : "В избранном"}
      </p>
    </button>
  );
}
