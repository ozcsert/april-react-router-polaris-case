import { Navigation, Frame } from "@shopify/polaris";
import { HomeIcon, OrderIcon } from "@shopify/polaris-icons";
import { useNavigate, useLocation } from "react-router-dom";
import logoSpaceCowboy from "@/assets/logo-spaceCowboy.svg";
import style from "./SideNavbar.module.scss";
interface NavigationItem {
  url: string;
  label: string;
  icon: any;
}

const SideNavbar: React.FC = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    {
      url: "/",
      label: "Home",
      icon: HomeIcon,
    },

    {
      url: "/dashboard",
      label: "Dashboard",
      icon: OrderIcon,
    },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const items = navigationItems.map(item => ({
    ...item,
    selected: location.pathname === item.url,
    onClick: () => handleNavigate(item.url),
  }));

  return (
    <aside className={style.sideNavbarContainer}>
      <Frame>
        <Navigation location={location.pathname}>
          <div className={style.navigationContainer}>
            <div className={style.logoWrapper}>
              <img
                src={logoSpaceCowboy}
                alt="Company Logo"
                className={style.logo}
              />
            </div>
            <Navigation.Section items={items} />
          </div>
        </Navigation>
      </Frame>
    </aside>
  );
};

export default SideNavbar;
