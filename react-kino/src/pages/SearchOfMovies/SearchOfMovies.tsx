import styles from "./SearchOfMovies.module.css";
import cn from "classnames";
import Header from "../../components/Header/Header";
import CardSection from "../../components/CardSection/CardSection";
import CardItems from "../../components/CardItems/CardItems";
import { useEffect } from "react";
import { Title } from "../../components/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreApp } from "../../store/store";
import { getMovie } from "../../store/movie.slice";

function SearchOfMovies() {
  const dispatch = useDispatch<AppDispatch>();
  const description = Object.values(
    useSelector((s: RootStoreApp) => s.movie.movies),
  );
  const searchFilter = useSelector(
    (s: RootStoreApp) => s.movie.nameSearchMovie,
  );

  useEffect(() => {
    dispatch(getMovie(searchFilter || "Spider-Man"));
  }, [searchFilter]);

  return (
    <div className={styles["link"]}>
      <Header />
      <CardSection
        className={cn(styles["card-section"], {
          [styles["no-movies"]]: description.length === 0,
        })}
      >
        {description.length === 0 ? (
          <div className={cn(styles["no-movies"])}>
            <Title>Упс... Ничего не найдено</Title>
            <p>
              Попробуйте изменить запрос или ввести более точное название фильма
            </p>
          </div>
        ) : (
          description.map((e) => {
            return (
              <CardItems
                key={e["#IMDB_ID"]}
                id={e["#IMDB_ID"]}
                title={e["#TITLE"]}
                favorites={e["#RANK"]}
                alt={e["#TITLE"]}
                src={e["#IMG_POSTER"]}
                year={e["#YEAR"]}
              />
            );
          })
        )}
      </CardSection>
    </div>
  );
}

export default SearchOfMovies;
