import { Page, Card, DataTable, TableData } from "@shopify/polaris";
import { useState, useCallback } from "react";

const ReportsContainer = () => {
  const [sortedRows, setSortedRows] = useState<TableData[][] | null>(null);

  const initiallySortedRows: TableData[][] = [
    ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
    [
      "Navy Merino Wool Blazer with khaki chinos and yellow belt",
      "$445.00",
      124518,
      32,
      "$14,240.00",
    ],
  ];
  const rows = sortedRows ? sortedRows : initiallySortedRows;

  const handleSort = useCallback(
    (index: number, direction: "ascending" | "descending") =>
      setSortedRows(sortCurrency(rows, index, direction)),
    [rows]
  );

  return (
    <Page title="Inventory reports" primaryAction={{ content: "Export" }}>
      <Card>
        <DataTable
          columnContentTypes={[
            "text",
            "numeric",
            "numeric",
            "numeric",
            "numeric",
          ]}
          headings={[
            "Product",
            "Price",
            "SKU Number",
            "Net quantity",
            "Net sales",
          ]}
          rows={rows}
          totals={["", "", "", 255, "$155,830.00"]}
          sortable={[false, true, false, false, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
        />
      </Card>
    </Page>
  );

  function sortCurrency(
    rows: TableData[][],
    index: number,
    direction: "ascending" | "descending"
  ): TableData[][] {
    return [...rows].sort((rowA, rowB) => {
      const amountA = parseFloat((rowA[index] || 0).toString().substring(1));
      const amountB = parseFloat((rowB[index] || 0).toString().substring(1));

      return direction === "descending" ? amountB - amountA : amountA - amountB;
    });
  }
};

export default ReportsContainer;
