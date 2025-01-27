import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RecipeSearchPage from "./Pages/RecipeSearchPage";
import RecipeDetailsPage from './Pages/RecipeDetailsPage';
import AddEditRecipePage from "./Pages/AddEditRecipePage";
import UserDashboard from "./Pages/UserDashboardPage";
import BookingsPage from './Pages/BookingsPage';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />}
        />
        <Route
          path="/search"
          element={<RecipeSearchPage searchKeyword={searchKeyword} />}
        />
        <Route
          path="/recipe/:id"
          element={<RecipeDetailsPage />} 
        />
        <Route
          path="/add-recipe" 
          element={<AddEditRecipePage />} 
        />
        <Route
          path="/dashboard"
          element={<UserDashboard />} 
        />
        <Route path="/bookings" 
        element={<BookingsPage />}
         />
      </Routes>
    </Router>
  );
};

export default App;