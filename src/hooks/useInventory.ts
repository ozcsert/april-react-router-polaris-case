import useSWR from "swr";
import { DataExplorationInventory } from "@/constants/type";

import mockData from "../constants/mockData.json";

const fetcher = async (): Promise<DataExplorationInventory> => {
  return mockData;
};

export const useInventory = () => {
  const { data, error, isLoading } = useSWR<DataExplorationInventory>(
    "inventory-key",
    fetcher
  );

  return {
    inventory: data,
    isLoading,
    isError: error,
  };
};
