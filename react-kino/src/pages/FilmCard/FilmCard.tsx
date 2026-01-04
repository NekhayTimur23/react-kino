import cn from "classnames";
import styles from "./FilmCard.module.css";
import { Title } from "../../components/Title/Title";
import { Grade } from "../../components/Grade/Grade";
import { ButtonVaforite } from "../../components/ButtonVaforite/ButtonVaforite";
import { DataMovies } from "../../components/DataMovies/DataMovies";
import { useParams } from "react-router-dom";
import { CARD_ARR } from "../../App.state";
import { ErrorSection } from "../Error/ErrorSection";

export function FilmCard() {
  const { id } = useParams();

  const filmCardArr = CARD_ARR.find((obj) => obj.id === Number(id));

  if (!filmCardArr) {
    throw new Error("ошибка");
  }

  return (
    <div className={cn(styles["film-description"])}>
      <div className={cn(styles["movie-title"])}>
        <p>Поиск фильмов</p>
        <Title size="32">{filmCardArr?.title}</Title>
      </div>
      <div className={cn(styles["content-film"])}>
        <div className={cn(styles["poster"])}>
          <img src={filmCardArr?.poster.src} alt={filmCardArr?.poster.alt} />
        </div>
        <div className={cn(styles["basic-description"])}>
          <p>
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </p>
          <div className={cn(styles["grade-and-vaforite"])}>
            <Grade
              className={cn(styles["grade-style"])}
              position="relative"
              favorites={filmCardArr?.favorites}
            />
            <ButtonVaforite id={filmCardArr?.favorites} />
          </div>
          <DataMovies textTitle={"Тип"} textDescription={"Movie"} />
          <DataMovies
            textTitle={"Дата выхода"}
            textDescription={"2019-04-24"}
          />
          <DataMovies textTitle={"Длительность"} textDescription={"181 мин"} />
          <DataMovies
            textTitle={"Жанр"}
            textDescription={"Adventure,  Science Fiction, Action"}
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
