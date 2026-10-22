import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductsList = ({ products, setProducts, search }) => {
  const filtered = products.filter((p) =>
    p.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="products-list">
        {filtered.map((product) => (
          <ProductDetails key={product.id} product={product} setProducts={setProducts} />
        ))}
      </div>
      <Link to="/add" className="floating-add">
        <span className="plus-icon">+</span>
        Add Product
      </Link>
    </>
  );
};

export default ProductsList;