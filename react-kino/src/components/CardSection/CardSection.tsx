import cn from "classnames";
import styles from "./CardSection.module.css";
import { CardSectionProps } from "./CardSection.props";

function CardSection({ children, className, ...rest }: CardSectionProps) {
  return (
    <div {...rest} className={cn(styles["card-section"], className)}>
      {children}
    </div>
  );
}

export default CardSection;
