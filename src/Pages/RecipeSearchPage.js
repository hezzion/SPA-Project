import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RecipeCard from "../Components/RecipeCard";
import "./RecipeSearchPage.css";

const API_KEY = "7fb19f241fdd4030903dc4ebc5a9899a"; // Replace with your Spoonacular API Key
const API_URL = "https://api.spoonacular.com/recipes/complexSearch";

const RecipeSearchPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword") || "";

  useEffect(() => {
    setSearchTerm(keyword);
    if (keyword) {
      fetchRecipes(keyword);
    }
  }, [keyword]);

  const fetchRecipes = async (query) => {
    setLoading(true);
    console.log("Fetching recipes for:", query);

    try {
      const response = await fetch(
        `${API_URL}?query=${query}&number=10&apiKey=${API_KEY}`
      );

      console.log("API Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched Recipes:", data.results);

      setResults(data.results && data.results.length > 0 ? data.results : []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setResults([]);
    }

    setLoading(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?keyword=${searchTerm}`);
      fetchRecipes(searchTerm);
    }
  };

  return (
    <div className="recipe-search-page">
      <Header setSearchKeyword={setSearchTerm} />
      <main className="search-main-content">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            className="search-bar"
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {loading ? (
          <p className="loading-text">Loading recipes...</p>
        ) : (
          <>
            <h1 className="search-title">
              {results.length > 0
                ? `Search Results for: "${searchTerm}"`
                : `No Results Found for: "${searchTerm}"`}
            </h1>
            <div className="recipe-grid">
              {results.length > 0 ? (
                results.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={{
                      id: recipe.id,
                      title: recipe.title,
                      image: recipe.image,
                    }}
                  />
                ))
              ) : (
                <p className="no-results">
                  Sorry, we couldn't find any recipes matching "{searchTerm}".
                </p>
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RecipeSearchPage;
