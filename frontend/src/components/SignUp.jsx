import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
                placeholder="Enter your password"
                required
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

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Confirm Password</label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
                placeholder="Confirm your password"
                required
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

          {/* Terms & Conditions */}
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" required />
            <label className="text-sm">I agree to the Terms & Conditions</label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200 shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="#" className="font-medium">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
