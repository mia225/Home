import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-extrabold text-gray-900 tracking-wide">
          RIVANSH
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <Link to="/" className="hover:text-blue-800 transition">Home</Link>
          <Link to="/products" className="hover:text-blue-800 transition">Products</Link>
          <Link to="/team" className="hover:text-blue-800 transition">Team</Link>
        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/register"
            className="border border-blue-900 text-blue-900 px-5 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Register
          </Link>
          <Link
            href="#signin"
            className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Sign In
          </Link>
        </div>
        </nav>

        

        {/* Mobile menu icon placeholder (optional for later) */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
