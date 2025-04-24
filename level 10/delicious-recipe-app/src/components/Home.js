import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { getPopularRecipes, getRecipesByCuisine } from '../services/api';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cuisine, setCuisine] = useState('italian');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const cachedRecipes = localStorage.getItem('popularRecipes');
        
        if (cachedRecipes) {
          setRecipes(JSON.parse(cachedRecipes));
        } else {
          const response = await getPopularRecipes();
          const recipesData = response.data.recipes;
          localStorage.setItem('popularRecipes', JSON.stringify(recipesData));
          setRecipes(recipesData);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleCuisineChange = async (selectedCuisine) => {
    setCuisine(selectedCuisine);
    try {
      const response = await getRecipesByCuisine(selectedCuisine);
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching cuisine recipes:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home">
      <h1>Popular Vegetarian Recipes</h1>
      
      <div className="cuisine-filter">
        <button onClick={() => handleCuisineChange('italian')}>Italian</button>
        <button onClick={() => handleCuisineChange('american')}>American</button>
        <button onClick={() => handleCuisineChange('indian')}>Indian</button>
        <button onClick={() => handleCuisineChange('mexican')}>Mexican</button>
      </div>

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <motion.div 
            key={recipe.id}
            className="recipe-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;