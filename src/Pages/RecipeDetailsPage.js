import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for dynamic routing
import Header from '../Components/Header';
import Footer from '../Components/Footer';
//import RecipeDetails from '../components/RecipeDetails';
import RecipeDetails from '../Components/RecipeDetails';

import './RecipeDetailsPage.css';
const RecipeDetailsPage = () => {
  // Get the recipe ID from the URL
  const { id } = useParams();

  // Sample data - In a real app, you would fetch this data based on the ID
  const sampleRecipes = [
    { 
      id: 1, 
      title: 'Spaghetti Carbonara', 
      image: '/images/carbonara.jpg',
      ingredients: ['200g Spaghetti', '100g Pancetta', '2 Eggs', 'Parmesan Cheese', 'Black Pepper'],
      steps: [
        'Cook spaghetti in boiling salted water until al dente.',
        'Fry pancetta in a pan until crispy.',
        'Whisk eggs and Parmesan together, then mix with pasta and pancetta.',
        'Serve with cracked black pepper and extra Parmesan.',
      ]
    },
    // Add more recipes as needed...
  ];

  const recipe = sampleRecipes.find(r => r.id === parseInt(id));

  return (
    <div className="recipe-details-page">
      <Header />
      <main className="main-content">
        {recipe ? <RecipeDetails recipe={recipe} /> : <p>Recipe not found</p>}
      </main>
      <Footer />
    </div>
  );
};

export default RecipeDetailsPage;