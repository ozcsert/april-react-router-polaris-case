import { Card, DataTable, TableData } from "@shopify/polaris";
import { useState } from "react";
import { DataExplorationInventory } from "@/constants/type"; // Make sure to import your type

interface DataTableViewProps {
  inventory: DataExplorationInventory;
}

const DataTableView = ({ inventory }: DataTableViewProps) => {
  const [sortedRows, setSortedRows] = useState<TableData[][] | null>(null);

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
