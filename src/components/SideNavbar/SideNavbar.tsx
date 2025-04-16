import { Navigation, Frame, Icon, IconSource } from "@shopify/polaris";
import {
  HomeIcon,
  OrderIcon,
  MenuIcon as RawMenuIcon,
} from "@shopify/polaris-icons";
import { useNavigate, useLocation } from "react-router-dom";
import logoSpaceCowboy from "@/assets/logo-spaceCowboy.svg";
import style from "./SideNavbar.module.scss";
import { useRef } from "react";

const MenuIcon: IconSource = () => <RawMenuIcon />;
interface NavigationItem {
  url: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

const SideNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef<HTMLElement>(null);

  const navigationItems: NavigationItem[] = [
    {
      url: "/",
      label: "Home",
      icon: HomeIcon,
    },

    {
      url: "/report",
      label: "Report",
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

  const handleMenuToggle = () => {
    if (sidebarRef.current) {
      const currentDisplay = sidebarRef.current.style.display;
      sidebarRef.current.style.display =
        currentDisplay === "none" ? "block" : "none";
    }
  };
  return (
    <div className={style.navWrapper}>
      <div className={style.hamburgerContainer}>
        <button
          className={style.hamburgerMenu}
          onClick={() => handleMenuToggle()}
        >
          <Icon
            accessibilityLabel="hamburgerMenuToggle"
            tone={"interactive"}
            source={MenuIcon}
          />
        </button>
      </div>

      <aside ref={sidebarRef} className={style.sideNavbarContainer}>
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
    </div>
  );
};

export default SideNavbar;
