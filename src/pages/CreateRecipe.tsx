import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export const CreateRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    imageUrl: '',
    cookingTime: '',
    servings: '',
    ingredients: [''],
    instructions: ['']
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        throw new Error('Please log in to create recipes');
      }

      const { error: insertError } = await supabase
        .from('recipes')
        .insert({
          user_id: user.id,
          title: recipe.title,
          description: recipe.description,
          image_url: recipe.imageUrl,
          cooking_time: parseInt(recipe.cookingTime),
          servings: parseInt(recipe.servings),
          ingredients: recipe.ingredients.filter(i => i.trim() !== ''),
          instructions: recipe.instructions.filter(i => i.trim() !== '')
        });

      if (insertError) throw insertError;

      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const addField = (field: 'ingredients' | 'instructions') => {
    setRecipe(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Create New Recipe</h2>
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={recipe.title}
            onChange={e => setRecipe(prev => ({ ...prev, title: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={recipe.description}
            onChange={e => setRecipe(prev => ({ ...prev, description: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            value={recipe.imageUrl}
            onChange={e => setRecipe(prev => ({ ...prev, imageUrl: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Cooking Time (minutes)</label>
            <input
              type="number"
              value={recipe.cookingTime}
              onChange={e => setRecipe(prev => ({ ...prev, cookingTime: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Servings</label>
            <input
              type="number"
              value={recipe.servings}
              onChange={e => setRecipe(prev => ({ ...prev, servings: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              min="1"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={e => {
                  const newIngredients = [...recipe.ingredients];
                  newIngredients[index] = e.target.value;
                  setRecipe(prev => ({ ...prev, ingredients: newIngredients }));
                }}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={`Ingredient ${index + 1}`}
              />
              {index === recipe.ingredients.length - 1 && (
                <button
                  type="button"
                  onClick={() => addField('ingredients')}
                  className="px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
          {recipe.instructions.map((instruction, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={instruction}
                onChange={e => {
                  const newInstructions = [...recipe.instructions];
                  newInstructions[index] = e.target.value;
                  setRecipe(prev => ({ ...prev, instructions: newInstructions }));
                }}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={`Step ${index + 1}`}
              />
              {index === recipe.instructions.length - 1 && (
                <button
                  type="button"
                  onClick={() => addField('instructions')}
                  className="px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
        >
          {isSubmitting ? 'Creating Recipe...' : 'Create Recipe'}
        </button>
      </form>
    </div>
  );
};