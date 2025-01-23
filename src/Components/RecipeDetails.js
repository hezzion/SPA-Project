import React from 'react';
import './RecipeDetails.css';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h2 className="recipe-title">{recipe.title}</h2>
      <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul className="ingredients-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps:</h3>
      <ol className="steps-list">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <div className="recipe-actions">
        <button className="save-favorite">Save to Favorites</button>
        <button className="rate-recipe">Rate Recipe</button>
      </div>
    </div>
  );
};

export default RecipeDetails;