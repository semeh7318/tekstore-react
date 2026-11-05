export const API_URL = "https://tek-server-hyxr.onrender.com/api/products";

export const fromServer = (p) => ({
  id: String(p.id),
  nom: p.name,
  prix: p.price,
  description: p.description,
  categorie: p.categories,
  image: p.imageUrl,
});
