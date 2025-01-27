import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RecipeCard from "../Components/RecipeCard";
import "./RecipeSearchPage.css";

const RecipeSearchPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword") || "";

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Spaghetti", image: "/image.png" },
      { id: 2, title: "Chicken", image: "/image copy 3.png" },
      { id: 3, title: "Suya", image: "/image.png" },
      { id: 4, title: "Egusi Soup", image: "/image copy 3.png" },
      { id: 5, title: "Egusi Soup", image: "/image copy 3.png" },
      { id: 6, title: "Egusi Soup", image: "/image copy 3.png" },
      { id: 7, title: "Egusi Soup", image: "/image copy 3.png" },
    ];

    setLoading(true);
    if (searchTerm.trim()) {
      const filteredResults = sampleRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
    setLoading(false);
  }, [searchTerm]); // No need to include sampleRecipes here anymore

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?keyword=${searchTerm}`);
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
                  <RecipeCard key={recipe.id} recipe={recipe} />
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
