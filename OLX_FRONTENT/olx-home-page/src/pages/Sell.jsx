import { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image_url: "",
  });

  const [categories, setCategories] = useState([]);

  // Fetch categories from API
  useEffect(() => {
    axios.get(import.meta.env.VITE_REACT_APP_API_URL_CATEGORY)
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formattedData = {
      ...formData,
      price: parseFloat(formData.price),
      category: parseInt(formData.category),
    };
  
    try {
      const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL_SELL, formattedData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Product created:", response.data);
      location.assign('/')
    } catch (error) {
      console.error("Error creating product:", error.response?.data);
    }
  };
  

  return (
    <div className="flex items-center justify-center my-10 w-full">
      <form onSubmit={handleSubmit} className="space-y-4 p-6 border border-gray-300 rounded-lg shadow-lg w-96 bg-white">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required minLength="3" maxLength="50" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />

        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required min="1" step="1" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />

        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required minLength="10" maxLength="200" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

        <select name="category" value={formData.category} onChange={handleChange} required className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        
        <input type="url" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Image URL (optional)" pattern="https?://.+" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        
        <button type="submit" className="bg-blue-500 text-white p-3 w-full rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
