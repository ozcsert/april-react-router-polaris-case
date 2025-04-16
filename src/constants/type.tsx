export type DataExplorationInventory = {
  scanners: InventoryCategory;
  crafts: InventoryCategory;
  lasers: InventoryCategory;
  bionicFocus: InventoryCategory;
};

export type ProductItem = {
  product: string;
  price: string;
  skuNumber: number;
  netQuantity: number;
  netSales: string;
};

export type InventoryCategory = {
  items: ProductItem[];
  totalQuantity: number;
  totalSales: string;
};
