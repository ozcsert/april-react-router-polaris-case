import useSWR from "swr";
import { DataExplorationInventory } from "@/constants/type";
import mockData from "../constants/mockData.json";

type CategoryKey = keyof DataExplorationInventory;

const fetcher = async (category: CategoryKey) => {
  if (category in mockData) {
    return mockData[category];
  }
  throw new Error(`Invalid category: ${category}`);
};

export const useInventory = (category?: CategoryKey) => {
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
