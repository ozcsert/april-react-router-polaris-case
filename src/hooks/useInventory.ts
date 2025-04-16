import useSWR from "swr";
import { DataExplorationInventory, InventoryCategory } from "@/constants/type";
import mockData from "../constants/mockData.json";

export type CategoryKey = keyof DataExplorationInventory;

const fetcher = async (category: string) => {
  if (category in mockData) {
    return mockData[category as keyof typeof mockData] as InventoryCategory;
  }
  throw new Error(`Invalid category: ${category}`);
};

export const useInventory = (category?: string) => {
  const { data, error, isLoading } = useSWR(
    category ? `inventory-${category}` : null,
    () => fetcher(category!)
  );

  return {
    inventory: data,
    isLoading,
    isError: error,
    category,
  };
};
