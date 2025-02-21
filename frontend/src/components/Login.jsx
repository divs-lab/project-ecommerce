import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border-4 border-purple-500">
        <h2 className="text-3xl font-bold text-center text-purple-700">Login</h2>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-purple-600 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-100 text-purple-900"
              autoComplete="on"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-600 text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-100 text-purple-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              {visible ? (
                <AiOutlineEyeInvisible
                  className="absolute top-4 right-4 text-gray-500 cursor-pointer"
                  onClick={() => setVisible(false)}
                  size={25}
                />
              ) : (
                <AiOutlineEye
                  className="absolute top-4 right-4 text-gray-500 cursor-pointer"
                  onClick={() => setVisible(true)}
                  size={25}
                />
              )}
            </div>
          </div>
          <div className="setting-container flex justify-between items-center text-purple-600">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Remember me!</label>
            </div>
            <a href="#" className="text-pink-300 font-bold hover:text-pink-500">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-200 shadow-md mt-4"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-purple-600 text-center mt-4">
          Not a user? <a href="#" className="text-pink-300 font-bold hover:text-pink-500">Create an account</a>
        </p>
      </div>
    </div>
  );
}
