import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { API_URL, fromServer } from "./api";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setProducts(res.data.map(fromServer)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <AppRoutes products={products} setProducts={setProducts} search={search} />
    </BrowserRouter>
  );
};

export default App;
