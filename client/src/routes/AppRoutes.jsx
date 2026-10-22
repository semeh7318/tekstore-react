import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductsList from "../components/ProductsList";
import Oneproduct from "../components/OneProduct";
import UpdateProduct from "../components/UpdateProduct";

const AppRoutes = ({ products, setProducts, search }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<ProductsList products={products} setProducts={setProducts} search={search} />}
      />
      <Route path="/add" element={<AddProduct setProducts={setProducts} />} />
      <Route path="/product/:id" element={<Oneproduct products={products} />} />
      <Route
        path="/edit/:id"
        element={<UpdateProduct products={products} setProducts={setProducts} />}
      />
    </Routes>
  );
};

export default AppRoutes;