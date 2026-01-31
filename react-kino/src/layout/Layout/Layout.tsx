import styles from "./Layout.module.css";

import NavSection from "../../components/NavSection/NavSection";
import NavLeftSection from "../../components/NavLeftSection/NavLeftSection";
import NavRightSection from "../../components/NavRightSection/NavRightSection";
import { Outlet } from "react-router-dom";

function Layout() {

 

  return (
    <div className={styles["app"]}>
      <div>
        <NavSection>
          <NavLeftSection />
          <NavRightSection />
        </NavSection>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
