import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ViewPage from "./pages/ViewPage";
import { store } from "./store/store";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/view/:id" element={<ViewPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
