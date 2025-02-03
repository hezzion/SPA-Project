import React, { useState } from "react";

const RandomRecipeBanner = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomRecipe = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=7fb19f241fdd4030903dc4ebc5a9899a"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipe.");
      }

      const data = await response.json();
      if (!data.recipes || data.recipes.length === 0) {
        throw new Error("No recipes found.");
      }

      setRandomRecipe(data.recipes[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "97%",
        height: "250px", // Adjusted height to avoid navbar clash
        backgroundImage: `url('/bg-4.jpg')`, // Change to your actual banner image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        marginTop: "50px", // Added margin to prevent navbar overlap
      }}
    >
      <div>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>
          🌟 Discover a Random Recipe! 🌟
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "15px" }}>
          Try something new today and explore unique flavors!
        </p>
        <button
          onClick={fetchRandomRecipe}
          style={{
            backgroundColor: "#ff8c00",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
        >
          {loading ? "Loading..." : "Get a Random Recipe 🍽️"}
        </button>
      </div>

      {/* Popup Modal for Recipe */}
      {randomRecipe && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            width: "90%",
            maxWidth: "400px",
            zIndex: "1000",
          }}
        >
          <h3 style={{ fontSize: "22px", fontWeight: "bold", color: "#333" }}>
            {randomRecipe.title}
          </h3>
          <img
            src={randomRecipe.image}
            alt={randomRecipe.title}
            style={{
              width: "100%",
              maxHeight: "200px", // Prevents long images
              objectFit: "cover", // Ensures images are well-proportioned
              borderRadius: "8px",
              margin: "10px 0",
            }}
          />
          <a
            href={randomRecipe.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#ff8c00",
              color: "white",
              padding: "8px 15px",
              fontSize: "14px",
              borderRadius: "5px",
              textDecoration: "none",
              marginTop: "10px",
            }}
          >
            View Full Recipe
          </a>
          <br />
          <button
            onClick={() => setRandomRecipe(null)}
            style={{
              marginTop: "10px",
              padding: "8px 12px",
              fontSize: "14px",
              border: "none",
              backgroundColor: "gray",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default RandomRecipeBanner;
