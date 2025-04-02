import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    tag: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border">
        <h2 className="text-2xl font-bold text-center">Add Product</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          {Object.keys(formData).map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm font-medium capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
                required
                placeholder={`Enter ${field}`}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200 shadow-md mt-4"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
