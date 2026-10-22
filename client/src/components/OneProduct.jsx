import { useParams, Link } from "react-router-dom";
const Oneproduct = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found</h2>
        <Link to="/">← Back to products</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.nom} />
      </div>

      <div className="product-info">
        <h1>{product.nom}</h1>
        <p className="card-item-cat">{product.categorie}</p>

        <h2>Prix : {product.prix} DT</h2>

        <p>{product.description}</p>

        <Link to={`/edit/${product.id}`}>Modifier</Link> |{" "}
        <Link to="/">← Retour</Link>
      </div>
    </div>
  );
};

export default Oneproduct;