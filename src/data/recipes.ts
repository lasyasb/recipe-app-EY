import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Homemade Margherita Pizza',
    description: 'Classic Italian pizza with fresh basil, mozzarella, and tomatoes',
    imageUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    cookingTime: 30,
    servings: 4,
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup warm water',
      '2 1/4 tsp active dry yeast',
      '1 tsp sugar',
      'Fresh mozzarella',
      'Fresh basil leaves',
      'San Marzano tomatoes',
      'Olive oil',
      'Salt to taste'
    ],
    instructions: [
      'Mix warm water with yeast and sugar, let stand for 5 minutes',
      'Combine flour and salt, then mix with yeast mixture to form dough',
      'Knead dough for 10 minutes, let rise for 1 hour',
      'Roll out dough and add toppings',
      'Bake at 450°F for 15-20 minutes'
    ]
  },
  {
    id: '2',
    title: 'Fresh Summer Salad',
    description: 'Light and refreshing salad perfect for warm days',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    cookingTime: 15,
    servings: 2,
    ingredients: [
      'Mixed salad greens',
      'Cherry tomatoes',
      'Cucumber',
      'Avocado',
      'Red onion',
      'Olive oil',
      'Balsamic vinegar',
      'Salt and pepper'
    ],
    instructions: [
      'Wash and dry all vegetables',
      'Slice cucumber, tomatoes, and red onion',
      'Cut avocado into chunks',
      'Combine all ingredients in a bowl',
      'Dress with olive oil and balsamic vinegar',
      'Season with salt and pepper to taste'
    ]
  }
];