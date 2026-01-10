import styles from "./SearchOfMovies.module.css";
import cn from "classnames";
import Header from "../../components/Header/Header";
import CardSection from "../../components/CardSection/CardSection";
import CardItems from "../../components/CardItems/CardItems";
import { useRouteLoaderData } from "react-router-dom";
import { SearchOfMoviesPropsJsonInterface } from "./SearchOfMovies.props";
import { useContext, useMemo } from "react";
import { UserContext } from "../../context/user.context";
import { Title } from "../../components/Title/Title";

function SearchOfMovies() {
  const {
    data: { description },
  } = useRouteLoaderData("root") as { data: SearchOfMoviesPropsJsonInterface };

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Контекст не загрузился");
  }

  const { searchFilter } = context;

  const filteredMovies = useMemo(() => {
    if (!searchFilter) return description;

    const normalizedFilter = searchFilter.trim().toUpperCase();

    return description.filter((movie) =>
      movie["#TITLE"].toUpperCase().includes(normalizedFilter)
    );
  }, [searchFilter, description]);

  return (
    <div className={styles["link"]}>
      <Header />
      <CardSection className={cn(styles["card-section"], {
		[styles["no-movies"]] : filteredMovies.length === 0
	  })}>
        {filteredMovies.length === 0 ? (
          <div className={cn(styles['no-movies'])}>
            <Title>Упс... Ничего не найдено</Title>
            <p>
              Попробуйте изменить запрос или ввести более точное название фильма
            </p>
          </div>
        ) : (
          filteredMovies.map((e) => {
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
