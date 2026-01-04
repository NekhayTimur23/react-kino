import cn from "classnames";
import styles from "./CardItems.module.css";
import { CardItemsProps } from "./CardItems.props";
import { Grade } from "../Grade/Grade";
import { ButtonVaforite } from "../ButtonVaforite/ButtonVaforite";
import { Link } from "react-router-dom";

function CardItems({
  id,
  title,
  favorites,
  poster: { alt, src },
}: CardItemsProps) {
  return (
    <div className={cn(styles["button-card"])}>
      <Link to={`/movie/${id}`}>
        <Grade favorites={favorites} />
        <div className={cn(styles["movie-poster"])}>
          <img className={cn(styles["movie-poster_img"])} src={src} alt={alt} />
        </div>
      </Link>
      <div className={cn(styles["description"])}>
        <p className={cn(styles["description_title"])}>{title}</p>
        <ButtonVaforite id={id} />
      </div>
    </div>
  );
}

export default CardItems;
