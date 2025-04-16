export type DataExplorationInventory = {
  scanners: InventoryCategory;
  craft: InventoryCategory;
  lasers: InventoryCategory;
  bionicFocus: InventoryCategory;
};

type ProductItem = {
  product: string;
  price: string;
  skuNumber: number;
  netQuantity: number;
  netSales: string;
};

type InventoryCategory = {
  items: ProductItem[];
  totalQuantity: number;
  totalSales: string;
};
