import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-100 text-center py-10">
      <h1 className="text-4xl font-bold">Welcome to Our E-Commerce Store</h1>
      <p className="text-gray-600 mt-2">Shop the best products at unbeatable prices</p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Shop Now</button>
    </header>
  );
}

export default Header;