import React from "react";
import { fetchDataFromApi } from "../constants/api";
import { ResponseObject } from "../interfaces/dataInterface";
import { ContextTypes } from "../interfaces/stateInterface";

export const Context = React.createContext({} as ContextTypes);
export default function AppContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [searchResult, setSearchResult] = React.useState<ResponseObject>();
  const [selectedCategory, setSelectedCategory] = React.useState<string>("New");
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);
  React.useEffect(() => {
    const callApi = (category: string) => {
      setLoading(true);
      fetchDataFromApi(`search/?q=${category}`).then((res) => {
        setSearchResult(res);
        setLoading(false);
      });
    };
    callApi(selectedCategory);
  }, []);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      <>{children}</>
    </Context.Provider>
  );
}
