import SideNavbar from "@/components/SideNavbar/SideNavbar";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";

const CustomLayout: React.FC = () => {
  return (
    <section className={style.pageLayoutWrapper}>
      <div className={style.pageLayoutContainer}>
        <SideNavbar />

        <Outlet />
      </div>
    </section>
  );
};

export default CustomLayout;
