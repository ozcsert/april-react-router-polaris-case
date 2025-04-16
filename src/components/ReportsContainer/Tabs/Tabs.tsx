import { Tabs, TabProps } from "@shopify/polaris";

import { useState, useCallback } from "react";

const TabsComponent = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),

    []
  );

  const tabs: TabProps[] = [
    {
      id: "tab1",

      content: "Title",

      accessibilityLabel: "Title",

      panelID: "panel1",
    },

    {
      id: "tab2",

      content: "Title",

      accessibilityLabel: "Title",

      panelID: "panel2",
    },
  ];

  return (
    <Tabs
      tabs={tabs}
      selected={selected}
      onSelect={handleTabChange}
      fitted // This makes tabs take full width
    />
  );
};

export default TabsComponent;
