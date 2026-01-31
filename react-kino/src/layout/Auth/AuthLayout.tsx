import styles from "./AuthLayout.module.css";

import NavSection from "../../components/NavSection/NavSection";
import NavLeftSection from "../../components/NavLeftSection/NavLeftSection";
import NavRightSection from "../../components/NavRightSection/NavRightSection";
import { Outlet } from "react-router-dom";

function AuthLayout() {

  return (
    <div className={styles["auth-layout"]}>
      <div>
        <NavSection>
          <NavLeftSection />
          <NavRightSection  />
        </NavSection>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;