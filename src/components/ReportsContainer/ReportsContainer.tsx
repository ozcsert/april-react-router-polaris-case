import { useState } from "react";
import DataTableView from "@/components/ReportsContainer/DataTableView/DataTableView";
import TabsComponent from "@/components/ReportsContainer/Tabs/Tabs";
import SearchBar from "@/components/ReportsContainer/SearchFilter/SearchFilter";

const ReportsContainer = () => {
  const [queryValue, setQueryValue] = useState("");

  const handleQueryChange = (value: string) => {
    setQueryValue(value);
  };

  const handleQueryClear = () => {
    setQueryValue("");
  };

  return (
    <>
      <SearchBar
        queryValue={queryValue}
        onQueryChange={handleQueryChange}
        onQueryClear={handleQueryClear}
      />
      <TabsComponent />
      <DataTableView searchQuery={queryValue} />
    </>
  );
};

export default ReportsContainer;
