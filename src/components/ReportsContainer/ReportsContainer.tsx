import { Card, DataTable, TableData } from "@shopify/polaris";
import { useState } from "react";
import { useInventory } from "@/hooks/useInventory";
// import SkeletonDataTableView from "./SkeletonDataTableView/SkeletonDataTableView";
import DataTableView from "./DataTableView/DataTableView";
import TabsComponent from "./Tabs/Tabs";

const ReportsContainer = () => {
  return (
    <>
      <TabsComponent />
      <DataTableView />;
    </>
  );
};

export default ReportsContainer;
