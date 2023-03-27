

export type ContextTypes = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchResult: boolean;
  setSearchResult: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
