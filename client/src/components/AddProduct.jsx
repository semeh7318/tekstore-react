import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ setProducts }) => {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now().toString(),
      nom,
      prix: Number(prix),
      description,
      categorie,
      image,
    };
    setProducts((prev) => [...prev, newProduct]);
    navigate("/");
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <label>
        Add your product
        <input type="text" placeholder="Product Name" value={nom} onChange={(e) => setNom(e.target.value)} />
        <input type="text" placeholder="Product price" value={prix} onChange={(e) => setPrix(e.target.value)} />
        <textarea placeholder="Your product description here" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <input type="text" placeholder="Product category" value={categorie} onChange={(e) => setCategorie(e.target.value)} />
        <input type="text" placeholder="Product image" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
};

export default AddProduct;