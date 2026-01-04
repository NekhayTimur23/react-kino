import cn from "classnames";
import styles from "./Title.module.css";

import { TitleProps } from "./Title.props";

export function Title({ children, size = '64', className }: TitleProps) {
  return (
    <h1 className={cn(styles["h1"], styles[`h1_${size}`], className)}>
      {children}
    </h1>
  );
}
