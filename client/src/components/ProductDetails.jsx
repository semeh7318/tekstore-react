import { Link, useNavigate } from "react-router-dom";
import deleteicon from "../assets/deleteicon.png";
import edit from "../assets/edit.png";

const ProductDetails = ({ product, setProducts }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  return (
    <div className="product-card">
      <div className="product-card-buttons">
        <img
          src={edit}
          className="icon-btn edit-btn"
          title="Edit"
          onClick={() => navigate(`/edit/${product.id}`)}
        />
        <img
          src={deleteicon}
          className="icon-btn delete-btn"
          title="Delete"
          onClick={handleDelete}
        />
      </div>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.nom} />
      </Link>
      <div className="card-body">
        <span className="card-item-cat">{product.categorie}</span>
        <h2>{product.nom}</h2>
        <p>{product.description}</p>
        <h5 className="price">${product.prix}</h5>
        <button className="add-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;