import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const  LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              autoComplete="on"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              {visible ? (
                <AiOutlineEyeInvisible
                  className="absolute top-4 right-4 text-gray-500 cursor-pointer"
                  onClick={() => setVisible(false)}
                  size={20}
                />
              ) : (
                <AiOutlineEye
                  className="absolute top-4 right-4 text-gray-500 cursor-pointer"
                  onClick={() => setVisible(true)}
                  size={20}
                />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Remember me</label>
            </div>
            <a href="#" className="text-sm">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200 shadow-md mt-4"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Not a user? <a href="#" className="font-medium">Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
