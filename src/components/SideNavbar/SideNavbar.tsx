import { Navigation, Frame } from "@shopify/polaris";
import { HomeIcon, OrderIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideNavbar: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState("/");

  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    setSelectedPath(path);
    navigate(path);
  };

  return (
    <Frame>
      <Navigation location={selectedPath}>
        <Navigation.Section
          items={[
            {
              url: "/",
              label: "Home",
              selected: selectedPath === "/",
              onClick: () => handleNavigate("/"),
              icon: HomeIcon,
            },
            {
              url: "/dashboard",
              label: "Dashboard",
              selected: selectedPath === "/dashboard",
              onClick: () => handleNavigate("/dashboard"),
              icon: OrderIcon,
            },
          ]}
        />
      </Navigation>
    </Frame>
  );
};

export default SideNavbar;
