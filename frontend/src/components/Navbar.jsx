import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">E-Commerce</h1>
      <div>
        <Link to="/" className="mx-4 hover:underline">Home</Link>
        <Link to="/products" className="mx-4 hover:underline">Products</Link>
        <Link to="/categories" className="mx-4 hover:underline">Categories</Link>
        <Link to="/orders" className="mx-4 hover:underline">Orders</Link>
        <Link to="/cart" className="mx-4 hover:underline">Cart</Link>
        <Link to="/profile" className="mx-4 hover:underline">Profile</Link>
        <Link to="/login" className="mx-4 hover:underline">Login</Link>
        <Link to="/signup" className="mx-4 hover:underline">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;