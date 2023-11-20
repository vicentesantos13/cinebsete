import { CategoryFilter } from "./CategoryFilter";
import { SearchComponent } from "./SearchComponent";

export const SearchArea = () => {
  return (
    <div className="flex mt-8 mx-auto px-3 xl:px-0 xl:max-w-7xl">
      <SearchComponent />
      <CategoryFilter />
    </div>
  );
};
