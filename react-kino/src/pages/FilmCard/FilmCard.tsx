import cn from "classnames";
import styles from "./FilmCard.module.css";
import { Title } from "../../components/Title/Title";
import { Grade } from "../../components/Grade/Grade";
import { ButtonVaforite } from "../../components/ButtonVaforite/ButtonVaforite";
import { DataMovies } from "../../components/DataMovies/DataMovies";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreApp } from "../../store/store";
import { ErrorSection } from "../Error/ErrorSection";
import { useEffect } from "react";
import { getDiscription } from "../../store/movie.slice";

export function FilmCard() {
  const { tt } = useParams<{ tt: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const movie = useSelector((s: RootStoreApp) => s.movie.movies);
  const favorites = useSelector((s: RootStoreApp) => s.movie.arrFaforites);
  const temporelDiscription = useSelector(
    (s: RootStoreApp) => s.movie.temporelDiscription,
  );

  console.log("temporelDiscription", temporelDiscription);

  if (!tt) {
    return <ErrorSection />;
  }

  useEffect(() => {
    dispatch(getDiscription({ tt }));
  }, [dispatch, tt]);

  const movieDiscription = useSelector(
    (s: RootStoreApp) => s.movie.movieDiscription,
  );

  const currentFilms = favorites[tt] ?? movie[tt];

  const short = movieDiscription[tt] ?? temporelDiscription[tt];

  if (!currentFilms || !short) {
    return <>Загрузка...</>;
  }

  const duration = () => {
    const dur = short.duration;
    const hours = Number(dur.match(/(\d+)H/)?.[1] ?? 0);
    const minutes = Number(dur.match(/(\d+)M/)?.[1] ?? 0);
    return `${hours} ч ${minutes} мин`;
  };

  return (
    <div className={cn(styles["film-description"])}>
      <div className={cn(styles["movie-title"])}>
        <p>Поиск фильмов</p>
        <Title size="32">{currentFilms["#TITLE"]}</Title>
      </div>
      <div className={cn(styles["content-film"])}>
        <div className={cn(styles["poster"])}>
          <img src={currentFilms["#IMG_POSTER"]} alt={currentFilms["#TITLE"]} />
        </div>
        <div className={cn(styles["basic-description"])}>
          <p>{short.description} --</p>
          <div className={cn(styles["grade-and-vaforite"])}>
            <Grade
              className={cn(styles["grade-style"])}
              position="relative"
              favorites={short.aggregateRating.ratingValue}
            />
            <ButtonVaforite id={tt} />
          </div>
          <DataMovies textTitle={"Тип"} textDescription={short["@type"]} />
          <DataMovies
            textTitle={"Дата выхода"}
            textDescription={short.datePublished}
          />
          <DataMovies textTitle={"Длительность"} textDescription={duration()} />
          <DataMovies
            textTitle={"Жанр"}
            textDescription={short.genre.join(", ")}
          />
        </div>
      </div>

      <div className={cn(styles["box-review"])}>
        <p>Отзывы</p>
        <div className={cn(styles["movie-title"])}>
          <div className={cn(styles["review-description"])}>
            <h3>{short.review.name}</h3>
            <p>{short.review.dateCreated}</p>
          </div>
          <div className={cn(styles["text-review"])}>
            {short.review.reviewBody}
          </div>
        </div>
      </div>
    </div>
  );
}
