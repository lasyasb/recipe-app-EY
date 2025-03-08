/*
  # Insert Initial Recipes

  1. Changes
    - Add initial set of recipes to the database
    - Include variety of cuisines and difficulty levels
    - Each recipe has complete ingredients and instructions
*/

INSERT INTO recipes (title, description, image_url, cooking_time, servings, ingredients, instructions) VALUES
(
  'Homemade Biryani',
  'A fragrant and flavorful Indian rice dish with aromatic spices and tender meat',
  'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
  120,
  6,
  ARRAY[
    '3 cups basmati rice',
    '500g chicken or lamb',
    '2 onions, thinly sliced',
    '4 tomatoes, chopped',
    '1/2 cup yogurt',
    '2 tbsp ginger-garlic paste',
    '2 tsp biryani masala',
    'Saffron strands',
    'Mint and coriander leaves',
    'Ghee or oil',
    'Salt to taste'
  ],
  ARRAY[
    'Soak rice for 30 minutes and cook until 70% done',
    'Marinate meat with yogurt and spices for 1 hour',
    'Fry onions until golden brown',
    'Layer rice and meat mixture in a heavy-bottomed pot',
    'Add saffron milk and herbs',
    'Cook on low heat for 20-25 minutes',
    'Let it rest for 10 minutes before serving'
  ]
),
(
  'Classic Idli',
  'Soft and fluffy South Indian steamed rice cakes',
  'https://images.unsplash.com/photo-1668236543090-82d9c1e08426',
  45,
  4,
  ARRAY[
    '2 cups idli rice',
    '1 cup urad dal',
    '1/2 tsp fenugreek seeds',
    'Salt to taste',
    'Water for grinding'
  ],
  ARRAY[
    'Soak rice and dal separately for 4-6 hours',
    'Grind to a smooth batter',
    'Ferment for 8-12 hours',
    'Pour into idli molds',
    'Steam for 10-12 minutes',
    'Serve hot with chutney and sambar'
  ]
),
(
  'Butter Chicken',
  'Rich and creamy North Indian curry with tender chicken pieces',
  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
  60,
  4,
  ARRAY[
    '500g chicken thighs',
    '2 cups tomato puree',
    '1 cup heavy cream',
    '2 tbsp butter',
    '2 tbsp tandoori masala',
    '1 tbsp ginger-garlic paste',
    'Kasuri methi',
    'Salt and spices to taste'
  ],
  ARRAY[
    'Marinate chicken in yogurt and spices',
    'Grill or bake chicken until cooked',
    'Prepare tomato gravy with spices',
    'Add cream and butter',
    'Simmer with chicken pieces',
    'Garnish with cream and serve'
  ]
),
(
  'Masala Dosa',
  'Crispy South Indian crepe with spiced potato filling',
  'https://images.unsplash.com/photo-1668236543090-82d9c1e08426',
  40,
  3,
  ARRAY[
    '2 cups dosa rice',
    '1/2 cup urad dal',
    'Potatoes for filling',
    'Onions and spices',
    'Oil for cooking',
    'Salt to taste'
  ],
  ARRAY[
    'Prepare dosa batter and ferment',
    'Make spiced potato filling',
    'Heat dosa tawa',
    'Spread batter in circular motion',
    'Add filling and fold',
    'Serve with chutneys'
  ]
);