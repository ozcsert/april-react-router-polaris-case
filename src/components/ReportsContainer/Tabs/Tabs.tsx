import { Tabs, TabProps } from "@shopify/polaris";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TabsComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabs: TabProps[] = [
    {
      id: "scanners",
      content: "Scanners",
      accessibilityLabel: "Scanners tab",
      panelID: "scanners-panel",
    },

    {
      id: "crafts",
      content: "Crafts",
      accessibilityLabel: "Craft tab",
      panelID: "craft-panel",
    },

    {
      id: "lasers",
      content: "Lasers",
      accessibilityLabel: "Lasers tab",
      panelID: "lasers-panel",
    },

    {
      id: "bionicFocus",
      content: "Bionic Focus",
      accessibilityLabel: "Bionic Focus tab",
      panelID: "bionic-focus-panel",
    },
  ];

  const handleTabChange = (selectedTabIndex: number) => {
    setSelected(selectedTabIndex);
    const newParams = new URLSearchParams(location.search);
    newParams.set("category", tabs[selectedTabIndex].id);
    navigate({
      pathname: location.pathname,
      search: newParams.toString(),
    });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("category");
    if (tabParam) {
      const initialTabIndex = tabs.findIndex(tab => tab.id === tabParam);
      if (initialTabIndex !== -1) {
        setSelected(initialTabIndex);
      }
    }
  }, [location.search, tabs]);

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted />
  );
};

export default TabsComponent;
