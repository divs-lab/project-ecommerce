import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  
  // Sample product data (Replace with API fetch logic)
  const product = {
    id,
    name: "Sample Product",
    email: "seller@example.com",
    price: "$50",
    description: "This is a high-quality product you will love!",
    category: "Electronics",
    stock: "20",
    tag: "Bestseller",
    image: "https://via.placeholder.com/300"
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600">Category: {product.category}</p>
        <p className="text-gray-600">Price: {product.price}</p>
        <p className="text-gray-600">Stock: {product.stock}</p>
        <p className="text-gray-600">Tag: {product.tag}</p>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <button className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200 shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProductPage;
