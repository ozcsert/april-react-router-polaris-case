import { Navigation, Frame } from "@shopify/polaris";
import { HomeIcon, OrderIcon, IconSource } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface NavigationItem {
  url: string;
  label: string;
  icon: IconSource;
}

const SideNavbar: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState("/");
  const navigate = useNavigate();

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
    setSelectedPath(path);
    navigate(path);
  };

  const items = navigationItems.map(item => ({
    ...item,
    selected: selectedPath === item.url,
    onClick: () => handleNavigate(item.url),
  }));

  return (
    <Frame>
      <Navigation location={selectedPath}>
        <Navigation.Section items={items} />
      </Navigation>
    </Frame>
  );
};

export default SideNavbar;
