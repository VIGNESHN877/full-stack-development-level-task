import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getRecipeDetails } from '../services/api';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const cachedRecipe = localStorage.getItem(`recipe-${id}`);
        
        if (cachedRecipe) {
          setRecipe(JSON.parse(cachedRecipe));
        } else {
          const response = await getRecipeDetails(id);
          localStorage.setItem(`recipe-${id}`, JSON.stringify(response.data));
          setRecipe(response.data);
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <motion.div
      className="recipe-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      
      <div className="recipe-info">
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
        
        <div className="instructions">
          <h2>Instructions</h2>
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </div>
      </div>
    </motion.div>
  );
};

export default Recipe;