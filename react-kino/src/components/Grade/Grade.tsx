import cn from "classnames";
import styles from "./Grade.module.css";
import { GradeProps } from "./Grade.props";

export function Grade({ favorites, className, position = 'absolute' }: GradeProps) {
  return (
    <div
      className={cn(
        styles["favorites"],
        styles[`favorites_${position}`],
        className
      )}
    >
      <img src="/public/star.svg" alt="star" />
      {favorites}
    </div>
  );
}
