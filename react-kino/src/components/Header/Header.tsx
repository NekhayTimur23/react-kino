import cn from "classnames";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import SearchBox from "../SearchBox/SearchBox";
import Paragraph from "../Paragraph/Paragraph";
import InputSearchForm from "../InputSearchForm/InputSearchForm";
import { Title } from "../Title/Title";

function Header({className, ...rest }: HeaderProps) {
  return (
    <div {...rest} className={cn(styles["header"], className)}>
      <Title>Поиск</Title>
      <Paragraph />
      <SearchBox>
        <InputSearchForm />
      </SearchBox>
    </div>
  );
}
export default Header;
