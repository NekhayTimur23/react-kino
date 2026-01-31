import styles from "./NavRightSection.module.css";
import NavMenu from "../NavMenu/NavMenu";
import { NavRightSectionProps } from "./NavRightSection.props";

function NavRightSection() {
  return (
    <div className={styles["nav-section_right"]}>
      <NavMenu  />
    </div>
  );
}

export default NavRightSection;
