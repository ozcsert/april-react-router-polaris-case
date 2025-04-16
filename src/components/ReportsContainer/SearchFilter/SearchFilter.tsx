// components/SearchBar/SearchBar.tsx
import { Card, Filters } from "@shopify/polaris";

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
    <Card padding={{ xs: "100", xl: "150" }}>
      <Filters
        borderlessQueryField={true}
        queryValue={queryValue}
        queryPlaceholder="Search items"
        filters={[]}
        appliedFilters={[]}
        onQueryChange={onQueryChange}
        onQueryClear={onQueryClear}
        onClearAll={handleClearAll}
      />
    </Card>
  );
};

export default SearchBar;
