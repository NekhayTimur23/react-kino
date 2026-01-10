import cn from "classnames";
import styles from "./CardSection.module.css";
import { CardSectionProps } from "./CardSection.props";

function CardSection({ children, className, ...rest }: CardSectionProps) {
  return (
    <div {...rest} className={cn(className)}>
      {children}
    </div>
  );
}

export default CardSection;
