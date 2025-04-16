import { Card, DataTable, TableData } from "@shopify/polaris";
import { useState, useEffect } from "react";
import { useInventory } from "@/hooks/useInventory";
import SkeletonDataTableView from "@/components/ReportsContainer/SkeletonDataTableView/SkeletonDataTableView";
import { useLocation } from "react-router-dom";
import { ProductItem } from "@/constants/type";

interface DataTableViewProps {
  searchQuery: string;
}

const DataTableView = ({ searchQuery }: DataTableViewProps) => {
  const [sortedRows, setSortedRows] = useState<TableData[][] | null>(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const category: string = searchParams.get("category") || "scanners";

  const { inventory, isLoading, isError } = useInventory(category);
  console.log(searchQuery);

  useEffect(() => {
    setSortedRows(null);
  }, [inventory]);

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

  const filterInventory = (items: ProductItem[], query: string) => {
    if (!query) return items;

    return items.filter(item =>
      item.product.toLowerCase().includes(query.toLowerCase())
    );
  };

  const transformToRows = () => {
    if (!inventory?.items) return [];

    const filteredItems = filterInventory(inventory.items, searchQuery);

    return filteredItems.map(item => [
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
