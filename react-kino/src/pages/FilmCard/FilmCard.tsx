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
          <p>{short.description}</p>
          <div className={cn(styles["grade-and-vaforite"])}>
            <Grade
              className={cn(styles["grade-style"])}
              position="relative"
              favorites={3}
            />
            <ButtonVaforite id={tt} />
          </div>
          <DataMovies textTitle={"Тип"} textDescription={short["@type"]} />
          <DataMovies
            textTitle={"Дата выхода"}
            textDescription={short.datePublished}
          />
          <DataMovies textTitle={"Длительность"} textDescription={"181 мин"} />
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
            <h3>Not as good as infinity war..</h3>
            <p>2019-04-29</p>
          </div>
          <div className={cn(styles["text-review"])}>
            But its a pretty good film. A bit of a mess in some parts, lacking
            the cohesive and effortless feel infinity war somehow managed to
            accomplish. Some silly plot holes and characters that could&apos;ve
            been cut (Ahem, captain marvel and thanos). The use of Captain
            marvel in this film was just ridiculous. Shes there at the start,
            bails for some reason? And then pops up at the end to serve no
            purpose but deux ex machina a space ship...
          </div>
        </div>
      </div>
    </div>
  );
}
