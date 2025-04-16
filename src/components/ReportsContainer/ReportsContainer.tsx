import DataTableView from "./DataTableView/DataTableView";

import { useInventory } from "@/hooks/useInventory";
import SkeletonDataTableView from "@/components/ReportsContainer/SkeletonDataTableView/SkeletonDataTableView";

import TabsComponent from "./Tabs/Tabs";

const ReportsContainer = () => {
  const { inventory, isLoading, isError } = useInventory("scanners");
  console.log("inventory", inventory);
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
