import cn from "classnames";
import styles from "./CardItems.module.css";
import { CardItemsProps } from "./CardItems.props";
import { Grade } from "../Grade/Grade";
import { ButtonVaforite } from "../ButtonVaforite/ButtonVaforite";
import { Link } from "react-router-dom";
import { useContext } from "react";

function CardItems({ id, title, favorites, alt, src, year }: CardItemsProps) {
  return (
    <div className={cn(styles["button-card"])}>
      <Link className={cn(styles["link-card"])} to={`/movie/${id}`}>
        <Grade favorites={favorites} />
        <div className={cn(styles["movie-poster"])}>
          <img className={cn(styles["movie-poster_img"])} src={src} alt={alt} />
        </div>
        <div className={cn(styles["description"])}>
          <p
            className={cn(styles["description_title"])}
          >{`${title} (${year})`}</p>
        </div>
      </Link>
      <ButtonVaforite className={cn(styles["buttonVaforite-card"])} id={id} />
    </div>
  );
}

export default CardItems;
