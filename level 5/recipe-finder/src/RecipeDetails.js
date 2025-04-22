// src/RecipeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from './data';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  return (
    <div>
      {recipe ? (
        <>
          <h1>{recipe.title}</h1>
          <img src={recipe.imageUrl} alt={recipe.title} />
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <p>{recipe.instructions}</p>
        </>
      ) : (
        <h2>Recipe Not Found</h2>
      )}
    </div>
  );
};

export default RecipeDetails;