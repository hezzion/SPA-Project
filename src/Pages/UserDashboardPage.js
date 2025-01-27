import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RecipeCard from "../Components/RecipeCard";
import "./UserDashboardPage.css";

const UserDashboard = () => {
  const myRecipes = [
    { id: 1, name: "Spaghetti Carbonara 🍝", image: "carbonara.jpg" },
    { id: 2, name: "Vegan Salad 🥗", image: "vegan-salad.jpg" },
    { id: 3, name: "Chocolate Cake 🍫🍰", image: "chocolate-cake.jpg" },
    { id: 4, name: "Chocolate Cake 🍫🍰", image: "chocolate-cake.jpg" },
    { id: 5, name: "Chocolate Cake 🍫🍰", image: "chocolate-cake.jpg" },
    { id: 6, name: "Chocolate Cake 🍫🍰", image: "chocolate-cake.jpg" },
    { id: 7, name: "Chocolate Cake 🍫🍰", image: "chocolate-cake.jpg" },
  ];

  const favoriteRecipes = [
    { id: 4, name: "Grilled Cheese 🧀", image: "grilled-cheese.jpg" },
    { id: 5, name: "Chicken Tacos 🌮", image: "chicken-tacos.jpg" },
    { id: 6, name: "Pancakes 🥞", image: "pancakes.jpg" },
  ];

  return (
    <div className="dashboard">
      <Header />
      <main>
        <h1 className="dashboard-title">Dashboard</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#45a049";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#4CAF50";
              e.target.style.transform = "scale(1)";
            }}
            onClick={() => (window.location.href = "/add-recipe")}
          >
            Add Recipe
          </button>
        </div>

        <section className="my-recipes">
          <h2 className="section-title">My Recipes</h2>
          <div className="recipe-grid">
            {myRecipes.length > 0 ? (
              myRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
            ) : (
              <p className="no-recipes-message">You have not added any recipes yet.</p>
            )}
          </div>
        </section>

        <section className="favorites">
          <h2 className="section-title">Favorites❤️</h2>
          <div className="recipe-grid">
            {favoriteRecipes.length > 0 ? (
              favoriteRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
            ) : (
              <p className="no-recipes-message">You have not added any favorite recipes yet.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboard;
