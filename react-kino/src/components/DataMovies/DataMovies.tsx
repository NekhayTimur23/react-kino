import { fiDataMoviesProps } from "./DataMovies.props";
import styles from "./DataMovies.module.css";
import cn from "classnames";

export function DataMovies({ textTitle, textDescription }: fiDataMoviesProps) {
  return (
    <div className={cn(styles["text-box"])}>
      <p className={cn(styles["text-title"])}>{textTitle}</p>
      <h3 className={cn(styles["text-descpiption"])}>{textDescription}</h3>
    </div>
  );
}
