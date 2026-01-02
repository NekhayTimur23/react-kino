import cn from "classnames";
import styles from "./CardItemBlock.module.css";
import { CardItemBlockProps } from "./CardItemBlock.props";

function CardItemBlock({ children, className, ...rest }: CardItemBlockProps) {
  return (
    <div {...rest} className={cn(styles["card-itemb_block"], className)}>
      {children}
    </div>
  );
}

export default CardItemBlock;
