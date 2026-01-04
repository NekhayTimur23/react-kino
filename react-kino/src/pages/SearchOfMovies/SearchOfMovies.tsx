import styles from "./SearchOfMovies.module.css";
import Header from "../../components/Header/Header";
import CardSection from "../../components/CardSection/CardSection";
import CardItemBlock from "../../components/CardItemBlock/CardItemBlock";
import CardItems from "../../components/CardItems/CardItems";
import { CARD_ARR } from "../../App.state";

function SearchOfMovies() {
  return (
    <div className={styles["link"]}>
        <Header />
      <CardSection>
        {CARD_ARR.length === 0 ? (
          <p>Список фильмов пуст</p>
        ) : (
          CARD_ARR.map((e) => (
            <CardItemBlock key={e.id}>
              <CardItems
                id={e.id}
                title={e.title}
                favorites={e.favorites}
                poster={e.poster}
              />
            </CardItemBlock>
          ))
        )}
      </CardSection>
    </div>
  );
}

export default SearchOfMovies;
