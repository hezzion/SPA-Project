import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RecipeCard from "../Components/RecipeCard";
import RandomRecipeBanner from "../Components/RandomRecipeBanner";
import "./HomePage.css";

// Move sampleRecipes outside the component
const sampleRecipes = [
  { id: 1, title: "Spaghetti", image: "/image.png" },
  { id: 2, title: "Chicken", image: "/image copy 3.png" },
  { id: 3, title: "Suya", image: "/image copy 3.png" },
  { id: 4, title: "Egusi Soup", image: "/image copy 3.png" },
  { id: 5, title: "Egusi Soup", image: "/image copy 3.png" },
  { id: 6, title: "Egusi Soup", image: "/image copy 3.png" },
  { id: 7, title: "Egusi Soup", image: "/image copy 3.png" },
];

const HomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    if (searchKeyword.trim()) {
      const filtered = sampleRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(sampleRecipes);
    }
  }, [searchKeyword]); // No warning because sampleRecipes is not a dependency

  return (
    <div className="homepage">
      <Header setSearchKeyword={setSearchKeyword} />
      <RandomRecipeBanner />
      <main className="main-content">
        <h1 className="section-title text-3xl font-bold text-center my-6">
          Featured Recipes
        </h1>
        <div className="recipe-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No recipes found for "{searchKeyword}".
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
