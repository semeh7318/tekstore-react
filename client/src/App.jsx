import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import exempleDonneesProduits from "./data/data";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState(
    exempleDonneesProduits.map((p, i) => ({ ...p, id: String(i + 1) }))
  );
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <AppRoutes products={products} setProducts={setProducts} search={search} />
    </BrowserRouter>
  );
};

export default App;