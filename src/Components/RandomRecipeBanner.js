import React, { useState } from "react";
import "./RandomRecipeBanner.css";

const RandomRecipeBanner = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomRecipe = async () => {
    setLoading(true);
    setError(null);
  
    try {
      // Use a valid API key and ensure the endpoint is correct
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/random?apiKey=6f12950460884f1793b30d8d910b97e6"
      );
  
      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Error: ${response.status}, Details: ${errorDetails}`);
      }
  
      const data = await response.json();
  
      if (!data.recipes || data.recipes.length === 0) {
        throw new Error("No recipes found in the API response.");
      }
  
      setRandomRecipe(data.recipes[0]);
    } catch (err) {
      console.error("API Fetch Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="random-recipe-banner bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-4">🌟 Try Something New Today! 🌟</h2>
      <p className="text-lg mb-4">
        Discover a recipe you've never tried before and take your taste buds on an unforgettable adventure 😄.
      </p>
      <button
        onClick={fetchRandomRecipe}
        className="mt-4 bg-white text-purple-500 hover:bg-purple-200 font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
      >
        {loading ? "Loading..." : "Get a Random Recipe 🍳✨"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {randomRecipe && (
        <div className="mt-6 p-4 bg-white text-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">{randomRecipe.title}</h3>
          <img
            className="rounded-lg shadow-md mb-4"
            src={randomRecipe.image}
            alt={randomRecipe.title}
          />
          <a
            href={randomRecipe.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 font-semibold hover:underline"
          >
            View Full Recipe
          </a>
        </div>
      )}
    </div>
  );
};

export default RandomRecipeBanner;
