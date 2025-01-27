import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <div className="recipe-card">
        {/* <div className="recipe-image-container">
          <img
            className="recipe-image"
            src={`${process.env.PUBLIC_URL}/carbonara.jpg`}
            alt={recipe.title}
          />
        </div> */}
        <div className="recipe-info">
          <h2 className="recipe-title">{recipe.title}</h2>
          <section className="ingredients-section">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>
          <section className="steps-section">
            <h3>Steps</h3>
            <ol className="steps-list">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
          <div className="recipe-actions">
            <button className="action-button save-favorite">
              Save to Favorites
            </button>
            <button className="action-button rate-recipe">Rate Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
