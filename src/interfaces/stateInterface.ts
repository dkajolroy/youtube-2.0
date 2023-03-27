import { ResponseObject } from "./dataInterface";

export type ContextTypes = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchResult: ResponseObject | undefined;
  setSearchResult: React.Dispatch<
    React.SetStateAction<ResponseObject | undefined>
  >;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
