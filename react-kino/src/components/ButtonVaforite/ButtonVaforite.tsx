import cn from "classnames";
import styles from "./ButtonVaforite.module.css";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import { ButtonVaforiteProps } from "./ButtonVaforite.props";

export function ButtonVaforite({ id, className }: ButtonVaforiteProps) {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within UserProvider");
  }

  const { addMoviesInFavorite, arrFaforites, removeMoviesInFavorite } = context;

  const favorite = arrFaforites.includes(id);

  function addFaforite(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();

    if (favorite) {
      removeMoviesInFavorite(id);
    } else {
      addMoviesInFavorite(id);
    }
  }

  return (
    <button
      onClick={addFaforite}
      className={cn(styles["button-favotire"], className)}
    >
      <img
        className={cn(styles["button-favotire_img"])}
        src={favorite ? "/public/favorite.svg" : "/public/like.svg"}
        alt="like"
      />
      <p
        className={cn(styles["button-favotire_button"], {
          [styles["favotire_button-on"]]: favorite,
        })}
      >
        {favorite ? "B избраное" : "В избраном"}
      </p>
    </button>
  );
}
