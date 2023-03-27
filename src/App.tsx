import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AppContext from "./context/AppContext";
import Feed from "./pages/Feed";
import LoginPage from "./pages/LoginPage";
import SearchResult from "./pages/SearchResult";
import ViewPage from "./pages/ViewPage";
export default function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex h-full flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/search/:query" element={<SearchResult />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/view/:id" element={<ViewPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}
