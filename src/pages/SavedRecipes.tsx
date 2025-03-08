import React from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { recipes } from '../data/recipes';

export const SavedRecipes = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Saved Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};