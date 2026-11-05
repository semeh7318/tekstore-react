import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL, fromServer } from "../api";

const AddProduct = ({ setProducts }) => {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");  
  const [categorie, setCategorie] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, {
        name: nom,
        price: Number(prix),
        description,
        categories: categorie,
        imageUrl: image,
      });
      setProducts((prev) => [...prev, fromServer(res.data)]);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
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