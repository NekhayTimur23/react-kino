import cn from "classnames";
import styles from "./CardItems.module.css";
import { CardItemsProps } from "./CardItems.props";

function CardItems({ title, favorites, poster: { alt, src } }: CardItemsProps) {
  return (
    <>
      <div className={cn(styles["favorites"])}>
        <img src="/public/favorite.svg" alt="favorite" />
        {favorites}
      </div>
      <div className={cn(styles["movie-poster"])}>
        <img className={cn(styles["movie-poster_img"])} src={src} alt={alt} />
      </div>
      <div className={cn(styles["description"])}>
        <p className={cn(styles["description_title"])}>{title}</p>
        <div className={cn(styles["button-favotire"])}>
          <img
            className={cn(styles["button-favotire_img"])}
            src="/public/like.svg"
            alt="like"
          />
          <button className={cn(styles["button-favotire_button"])}>
            в избраное
          </button>
        </div>
      </div>
    </>
  );
}

export default CardItems;
