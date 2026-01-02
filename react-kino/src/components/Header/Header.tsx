import cn from "classnames";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

function Header({ children, className, ...rest }: HeaderProps) {
  return <div {...rest} className={cn(styles["header"], className)}>{children}</div>;
}
export default Header;
