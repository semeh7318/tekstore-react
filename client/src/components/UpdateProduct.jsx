import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [nom, setNom] = useState(product ? product.nom : "");
  const [prix, setPrix] = useState(product ? product.prix : "");
  const [description, setDescription] = useState(product ? product.description : "");
  const [image, setImage] = useState(product ? product.image : "");

  if (!product) return <h2>Product not found</h2>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, nom, prix: Number(prix), description, image } : p
      )
    );
    navigate("/");
  };

  return (
    <form className="update-product-form" onSubmit={handleSubmit}>
      <h2>Update Product</h2>

      <input type="text" placeholder="Product Name" value={nom} onChange={(e) => setNom(e.target.value)} />

      <input type="number" placeholder="Product Price" value={prix} onChange={(e) => setPrix(e.target.value)} />

      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />

      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;