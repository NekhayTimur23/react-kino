import { forwardRef } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, className, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        onChange={onChange}
        className={cn(styles["input"], className)}
      />
    );
  }
);

export default Input;
