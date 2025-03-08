Overview

The Recipe App is a web application built with React, TypeScript, and Vite. It allows users to create, view, and save recipes. The app features a user-friendly interface and utilizes Supabase for backend services, including authentication and database management.

Features

User Authentication: Users can log in or register to create and save their recipes.
Recipe Management: Users can create new recipes, view a list of recipes, and save their favorite recipes.
Responsive Design: The app is designed to be responsive and works well on both desktop and mobile devices.
Interactive UI: Users can click on recipes to view detailed information in a modal.

Technologies Used
Frontend:

React
TypeScript
Vite
Tailwind CSS
Lucide Icons
Backend:

Supabase (for database and authentication)
Getting Started
Prerequisites
Node.js (version 14 or higher)
npm or yarn
Installation
Clone the repository:

bash
Run
Copy code
git clone https://github.com/yourusername/recipe-app.git
cd recipe-app
Install dependencies:

bash
Run
Copy code
npm install
or

bash
Run
Copy code
yarn install
Set up environment variables:

Create a .env file in the root directory and add your Supabase URL and Anon Key:

plaintext
Run
Copy code
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
Start the development server:

bash
Run
Copy code
npm run dev
or

bash
Run
Copy code
yarn dev
Open your browser and navigate to http://localhost:3000 to view the app.

Usage
Home Page: View all available recipes.
Create Recipe: Use the form to create a new recipe.
Saved Recipes: View your saved recipes.
Login/Register: Access the authentication page to log in or create a new account.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
