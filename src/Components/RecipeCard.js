import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image-wrapper">
        <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-description">
          {recipe.description || "A delicious recipe waiting for you to try!"}
        </p>
        <div className="recipe-actions">
          <button className="recipe-button" 
           style={{
            backgroundColor: "green",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate(`/recipe/${recipe.id}`)}>
            View Recipe
          </button>
          <button onClick={toggleFavorite} className="heart-button">
            {isFavorite ? (
              <AiFillHeart className="heart-icon" size={24} color="green" />
            ) : (
              <AiOutlineHeart className="heart-icon" size={24} color="#777" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
