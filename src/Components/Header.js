import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Header.css';

const Header = ({ setSearchKeyword }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage nav toggle
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchKeyword(searchTerm);
      navigate(`/search?keyword=${searchTerm}`);
    }
  };

  const handleToggle = () => {
    setIsNavOpen((prevState) => !prevState); // Toggle the navigation menu state
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="RecipeVault Logo" className="logo-img" />
        </Link>
      </div>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <div className="search-bar-container">
          <input
            className="search-bar"
            type="text"
            placeholder="🔍 Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </form>
      <button
        className="menu-toggle-button"
        onClick={handleToggle} // Add toggle functionality here
      >
        ☰
      </button>
      <nav className={`nav ${isNavOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/recipe/1">Recipe Details</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/bookings">Bookings</Link>
      </nav>
    </header>
  );
};

export default Header;
