import styles from "./NavRightSection.module.css";
import NavMenu from "../NavMenu/NavMenu";
import { NavRightSectionProps } from "./NavRightSection.props";

function NavRightSection({ exitAccount }: NavRightSectionProps) {
  return (
    <div className={styles["nav-section_right"]}>
      <NavMenu  exitAccount={exitAccount} />
    </div>
  );
}

export default NavRightSection;
