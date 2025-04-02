import React, { useState } from 'react';

const AddressForm = () => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border">
        <h2 className="text-2xl font-bold text-center">Add Address</h2>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Street Address</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
              placeholder="Enter your street address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="Enter your city"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              placeholder="Enter your state"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">ZIP Code</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
              placeholder="Enter your ZIP code"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200 shadow-md mt-4"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddressForm;
