import React from 'react';
import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ChefHat className="w-8 h-8 text-white mr-3" />
            <Link to="/" className="text-2xl font-bold">Recipe App</Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link to="/create" className="hover:text-blue-200 transition-colors">
              Create Recipe
            </Link>
            <Link to="/saved" className="hover:text-blue-200 transition-colors">
              Saved Recipes
            </Link>
            <Link to="/login" className="hover:text-blue-200 transition-colors">
              Login/Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};