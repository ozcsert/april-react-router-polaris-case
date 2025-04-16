import { Card, DataTable, TableData } from "@shopify/polaris";

import { useState } from "react";

import { InventoryCategory } from "@/constants/type";

interface DataTableViewProps {
  inventory: InventoryCategory;
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

  const transformToRows = () => {
    if (!inventory?.items) return [];
    return inventory.items.map(item => [
      item.product,
      item.price,
      item.skuNumber,
      item.netQuantity,
      item.netSales,
    ]);
  };

  const rows = sortedRows || transformToRows();

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
    if (!inventory) return ["", "", "", 0, "$0.00"];

    return ["", "", "", inventory.totalQuantity, inventory.totalSales];
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
