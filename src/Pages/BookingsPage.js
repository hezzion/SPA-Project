import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./BookingsPage.css";

const BookingsPage = () => {
  const [selectedChef, setSelectedChef] = useState(null);

  const chefs = [
    {
      id: 1,
      name: "Chef Gordon Ramsay",
      specialty: "Fine Dining",
      experience: "20 years",
      rating: 5,
      image: "/chef1.png",
    },
    {
      id: 2,
      name: "Chef Jamie Oliver",
      specialty: "Healthy Meals",
      experience: "15 years",
      rating: 4.8,
      image: "/chef2.png",
    },
    {
      id: 3,
      name: "Chef Samin Nosrat",
      specialty: "Comfort Food",
      experience: "10 years",
      rating: 4.5,
      image: "/chef3.png",
    },
  ];

  const handleBookChef = (chef) => {
    setSelectedChef(chef);
    alert(`You selected ${chef.name}. Proceed to book.`);
  };

  return (
    <div className="bookings-page">
      <Header />
      <h1 className="page-title text-3xl font-bold text-center mb-6"style={{
fontSize: '30px',
fontWeight: 'light',
textAlign: 'center',
marginBottom: '24px',color: 'green'
}}>Book a Chef</h1>
      <div className="chefs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {chefs.map((chef) => (
          <div key={chef.id} className="chef-card bg-white shadow-lg rounded-lg p-4 flex items-center space-x-6">
            <img
              src={chef.image}
              alt={chef.name}
              className="chef-image w-32 h-32 object-cover rounded-full"
            />
            <div className="chef-details flex flex-col justify-between">
              <h2 className="chef-name text-xl font-semibold mb-2">{chef.name}</h2>
              <p className="chef-specialty text-gray-600 mb-2">
                Specialty: <span className="text-gray-800">{chef.specialty}</span>
              </p>
              <p className="chef-experience text-gray-600 mb-2">
                Experience: <span className="text-gray-800">{chef.experience}</span>
              </p>
              <p className="chef-rating text-yellow-500 font-medium">
                Rating: {chef.rating} ⭐⭐⭐⭐
              </p>
              <button
                className="book-button mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={() => handleBookChef(chef)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedChef && (
        <div className="selected-chef mt-8 text-center">
          <h2 className="text-xl font-bold">You selected {selectedChef.name}</h2>
          <p>Specialty: {selectedChef.specialty}</p>
          <p>Experience: {selectedChef.experience}</p>
          <p>Rating: {selectedChef.rating} ⭐⭐⭐⭐</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default BookingsPage;

