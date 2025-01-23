import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      <h3 className="recipe-title">{recipe.title}</h3>
    </div>
  );
};

export default RecipeCard;
