import React, { useState } from 'react';
import './RecipeForm.css';

const RecipeForm = ({ formTitle, initialData, onSubmit, onCancel }) => {
  const [recipeName, setRecipeName] = useState(initialData?.name || '');
  const [image, setImage] = useState(initialData?.image || '');
  const [ingredients, setIngredients] = useState(initialData?.ingredients || ['']);
  const [steps, setSteps] = useState(initialData?.steps || ['']);
  const [tags, setTags] = useState(initialData?.tags || '');

  const handleDynamicChange = (setState, index, value) => {
    const updatedList = [...setState];
    updatedList[index] = value;
    setState(updatedList);
  };

  const handleAddField = (setState, initialValue) => setState((prev) => [...prev, initialValue]);

  const handleRemoveField = (setState, index) => setState((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipeName.trim() && image.trim() && ingredients.length && steps.length) {
      onSubmit({ recipeName, image, ingredients, steps, tags });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form className="recipe-form p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="form-title text-2xl font-bold mb-4">{formTitle}</h2>

      <label className="block mb-2 font-semibold">Recipe Name:</label>
      <input
        type="text"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Enter the recipe name"
        className="input-field mb-4"
        required
      />

      <label className="block mb-2 font-semibold">Image Upload:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Paste image URL"
        className="input-field mb-4"
      />
      {image && (
        <div className="image-preview mb-4">
          <img src={image} alt="Recipe Preview" className="w-full h-48 object-cover rounded-lg shadow" />
        </div>
      )}

      <label className="block mb-2 font-semibold">Ingredients:</label>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="dynamic-input mb-4 flex items-center">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => handleDynamicChange(ingredients, index, e.target.value)}
            placeholder={`Ingredient ${index + 1}`}
            className="input-field flex-1 mr-2"
          />
          <button
            type="button"
            onClick={() => handleRemoveField(setIngredients, index)}
            className="btn-danger mr-2"
            disabled={ingredients.length === 1}
          >
            -
          </button>
          {index === ingredients.length - 1 && (
            <button type="button" onClick={() => handleAddField(setIngredients, '')} className="btn-primary">
              +
            </button>
          )}
        </div>
      ))}

      <label className="block mb-2 font-semibold">Steps:</label>
      {steps.map((step, index) => (
        <div key={index} className="dynamic-input mb-4 flex items-center">
          <textarea
            value={step}
            onChange={(e) => handleDynamicChange(steps, index, e.target.value)}
            placeholder={`Step ${index + 1}`}
            className="input-field flex-1 mr-2"
          ></textarea>
          <button
            type="button"
            onClick={() => handleRemoveField(setSteps, index)}
            className="btn-danger mr-2"
            disabled={steps.length === 1}
          >
            -
          </button>
          {index === steps.length - 1 && (
            <button type="button" onClick={() => handleAddField(setSteps, '')} className="btn-primary">
              +
            </button>
          )}
        </div>
      ))}

      <label className="block mb-2 font-semibold">Tags:</label>
      <select
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="input-field mb-4"
        required
      >
        <option value="">Select a tag</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten-Free</option>
        <option value="dessert">Dessert</option>
      </select>

      <div className="form-actions flex justify-between mt-6">
        <button type="submit" className="btn-primary">Submit</button>
        <button type="button" onClick={onCancel} className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
