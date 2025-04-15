import SideNavbar from "@/components/SideNavbar/SideNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import style from "./Layout.module.scss";
import { useState } from "react";

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
