import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import KittenListPage from "./pages/KittenListPage/KittenListPage";
import KittyDetailsPage from "./pages/KittyDetailsPage/KittyDetailsPage";
import NewKittyPage from "./pages/NewKittyPage/NewKittyPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <h1>Kitten App</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<KittenListPage />} />
        <Route path="/new-kitty" element={<NewKittyPage />} />
        <Route path="/kitty/:id" element={<KittyDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
