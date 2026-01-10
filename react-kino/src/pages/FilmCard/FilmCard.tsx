import cn from "classnames";
import styles from "./FilmCard.module.css";
import { Title } from "../../components/Title/Title";
import { Grade } from "../../components/Grade/Grade";
import { ButtonVaforite } from "../../components/ButtonVaforite/ButtonVaforite";
import { DataMovies } from "../../components/DataMovies/DataMovies";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import { FilmCardProps } from "./FilmCard.props";
import { SearchOfMoviesPropsJsonInterface } from "../SearchOfMovies/SearchOfMovies.props";

export function FilmCard() {

  const { tt } = useParams();

 const {
    data: { description },
  } = useRouteLoaderData('root') as { data: SearchOfMoviesPropsJsonInterface };

  const filmCardArr = description.find(elem => elem["#IMDB_ID"] === tt)

  if(!filmCardArr || !tt) {
    throw new Error('Данные фильма не загрузились!')
  }
  
  const {data: {short}} = useLoaderData() as {data: FilmCardProps};

  console.log(short)
  
  

  return (
    <div className={cn(styles["film-description"])}>
      <div className={cn(styles["movie-title"])}>
        <p>Поиск фильмов</p>
        <Title size="32">{filmCardArr?.["#TITLE"]}</Title>
      </div>
      <div className={cn(styles["content-film"])}>
        <div className={cn(styles["poster"])}>
          <img src={filmCardArr?.["#IMG_POSTER"]} alt={filmCardArr?.["#TITLE"]} />
        </div>
        <div className={cn(styles["basic-description"])}>
          <p>
          {short.description}
          </p>
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
            textDescription={short.genre.join(', ')}
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
