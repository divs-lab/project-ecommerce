import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const products = [
  { id: 1, name: "Product 1", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "$25", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "$30", image: "https://via.placeholder.com/150" },
];
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="p-8 text-center">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <p className="text-gray-600 mb-6">Check out our latest collections!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-medium mt-2">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-3 bg-blue-500 text-white py-1 px-4 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;