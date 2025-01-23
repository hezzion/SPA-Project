import React, { useState, useEffect } from "react";
import Header from "../Components/Header"; // Import Header component
import Footer from "../Components/Footer";
import RecipeCard from "../Components/RecipeCard";
import RandomRecipeBanner from "../Components/RandomRecipeBanner";
import "./HomePage.css";

const HomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState(""); // Add search state here
  const [filteredRecipes, setFilteredRecipes] = useState([]); // State for filtered recipes

  const sampleRecipes = [
    { id: 1, title: "Spaghetti", image: "/image.png" },
    { id: 2, title: "Chicken", image: "/image copy 3.png" },
    { id: 3, title: "Suya", image: "/image copy 3.png" },
    { id: 4, title: "Egusi Soup", image: "/image copy 3.png" },
    { id: 5, title: "Egusi Soup", image: "/image copy 3.png" },
    { id: 6, title: "Egusi Soup", image: "/image copy 3.png" },
    { id: 7, title: "Egusi Soup", image: "/image copy 3.png" },
  ];

  // Filter the recipes based on the search keyword
  useEffect(() => {
    if (searchKeyword.trim()) {
      const filtered = sampleRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(sampleRecipes); // Show all recipes if there's no search term
    }
  }, [searchKeyword]); // Re-run whenever searchKeyword changes

  return (
    <div className="homepage">
      <Header setSearchKeyword={setSearchKeyword} /> {/* Pass setSearchKeyword as prop */}
      <main className="main-content">
        <h1 className="section-title">Featured Recipes</h1>
        <div className="recipe-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>No recipes found for "{searchKeyword}".</p>
          )}
        </div>
        <RandomRecipeBanner />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;