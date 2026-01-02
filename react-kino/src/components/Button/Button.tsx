import styles from "./Button.module.css";
import cn from "classnames";
import { ButtonProps } from "./Button.props";

function Button({ children, className, onClick, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(styles["button"], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
