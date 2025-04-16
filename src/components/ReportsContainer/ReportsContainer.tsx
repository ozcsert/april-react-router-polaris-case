import DataTableView from "./DataTableView/DataTableView";

import { useInventory } from "@/hooks/useInventory";

import SkeletonDataTableView from "@/components/ReportsContainer/SkeletonDataTableView/SkeletonDataTableView";

import TabsComponent from "./Tabs/Tabs";
import { useLocation } from "react-router-dom";

const ReportsContainer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category: string = searchParams.get("category") || "scanners";
  const { inventory, isLoading, isError } = useInventory(category);

  if (isLoading) return <SkeletonDataTableView />;
  if (isError) return <SkeletonDataTableView />;
  if (!inventory) return <div>No inventory data</div>;

  return (
    <>
      <TabsComponent />

      <DataTableView inventory={inventory} />
    </>
  );
};

export default ReportsContainer;
