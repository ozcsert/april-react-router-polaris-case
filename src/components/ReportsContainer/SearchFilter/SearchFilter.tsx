// components/SearchBar/SearchBar.tsx
import { Filters } from "@shopify/polaris";

interface SearchBarProps {
  queryValue: string;
  onQueryChange: (value: string) => void;
  onQueryClear: () => void;
}

const SearchBar = ({
  queryValue,
  onQueryChange,
  onQueryClear,
}: SearchBarProps) => {
  const handleClearAll = () => {};

  return (
    <Filters
      queryValue={queryValue}
      queryPlaceholder="Search items"
      filters={[]}
      appliedFilters={[]}
      onQueryChange={onQueryChange}
      onQueryClear={onQueryClear}
      onClearAll={handleClearAll}
    />
  );
};

export default SearchBar;
