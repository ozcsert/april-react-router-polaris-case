import { Card, DataTable, TableData } from "@shopify/polaris";
import { useState } from "react";
import { useInventory } from "@/hooks/useInventory";
import SkeletonDataTableView from "@/components/ReportsContainer/SkeletonDataTableView/SkeletonDataTableView";

const DataTableView = () => {
  const [sortedRows, setSortedRows] = useState<TableData[][] | null>(null);
  const { inventory, isLoading, isError } = useInventory();

  const columnData = [
    "Product",
    "Price",
    "SKU Number",
    "Net quantity",
    "Net sales",
  ];

  const columnContentTypes: ("text" | "numeric")[] = [
    "text",
    "numeric",
    "numeric",
    "numeric",
    "numeric",
  ];

  const transformScannersToRows = () => {
    if (!inventory?.scanners) return [];

    return inventory.scanners.items.map(item => [
      item.product,
      item.price,
      item.skuNumber,
      item.netQuantity,
      item.netSales,
    ]);
  };

  const rows = sortedRows || transformScannersToRows();

  const sortCurrency = (
    rows: TableData[][],
    index: number,
    direction: "ascending" | "descending"
  ): TableData[][] => {
    return [...rows].sort((rowA, rowB) => {
      const amountA = parseFloat(
        (rowA[index] || 0).toString().replace(/[$,]/g, "")
      );
      const amountB = parseFloat(
        (rowB[index] || 0).toString().replace(/[$,]/g, "")
      );
      return direction === "descending" ? amountB - amountA : amountA - amountB;
    });
  };

  const handleSort = (index: number, direction: "ascending" | "descending") =>
    setSortedRows(sortCurrency(rows, index, direction));

  const calculateTotals = () => {
    if (!inventory?.scanners) return ["", "", "", 0, "$0.00"];
    const totalQuantity = inventory.scanners.totalQuantity;
    const totalSales = inventory.scanners.totalSales;
    return ["", "", "", totalQuantity, totalSales];
  };

  if (isLoading) return <SkeletonDataTableView />;
  if (isError) return <SkeletonDataTableView />;
  if (!inventory) return <div>No inventory data</div>;

  return (
    <Card>
      <DataTable
        columnContentTypes={columnContentTypes}
        headings={columnData}
        rows={rows}
        totals={calculateTotals()}
        sortable={[false, true, false, false, true]}
        defaultSortDirection="descending"
        initialSortColumnIndex={4}
        onSort={handleSort}
      />
    </Card>
  );
};

export default DataTableView;
