import React, { useState } from 'react';
import './RecipeForm.css';

const RecipeForm = ({ formTitle, initialData, onSubmit, onCancel }) => {
  const [recipeName, setRecipeName] = useState(initialData?.name || '');
  const [image, setImage] = useState(initialData?.image || '');
  const [ingredients, setIngredients] = useState(initialData?.ingredients || ['']);
  const [steps, setSteps] = useState(initialData?.steps || ['']);
  const [tags, setTags] = useState(initialData?.tags || '');

  const handleAddIngredient = () => setIngredients([...ingredients, '']);
  const handleRemoveIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleAddStep = () => setSteps([...steps, '']);
  const handleRemoveStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ recipeName, image, ingredients, steps, tags });
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>{formTitle}</h2>
      <label>Recipe Name:</label>
      <input
        type="text"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />
      <label>Image Upload:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Paste image URL"
      />
      <label>Ingredients:</label>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="dynamic-input">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            placeholder={`Ingredient ${index + 1}`}
          />
          <button
            type="button"
            onClick={() => handleRemoveIngredient(index)}
            disabled={ingredients.length === 1}
          >
            -
          </button>
          <button type="button" onClick={handleAddIngredient}>
            +
          </button>
        </div>
      ))}
      <label>Steps:</label>
      {steps.map((step, index) => (
        <div key={index} className="dynamic-input">
          <textarea
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
            placeholder={`Step ${index + 1}`}
          ></textarea>
          <button
            type="button"
            onClick={() => handleRemoveStep(index)}
            disabled={steps.length === 1}
          >
            -
          </button>
          <button type="button" onClick={handleAddStep}>
            +
          </button>
        </div>
      ))}
      <label>Tags:</label>
      <select value={tags} onChange={(e) => setTags(e.target.value)}>
        <option value="">Select a tag</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten-Free</option>
        <option value="dessert">Dessert</option>
      </select>
      <div className="form-actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
