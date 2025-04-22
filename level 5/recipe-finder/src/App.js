// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Note the change here
import recipes from './data';
import RecipeDetails from './RecipeDetails';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Router>
      <div>
        <h1>Recipe Finder</h1>
        <input 
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          {filteredRecipes.map(recipe => (
            <div key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h2>{recipe.title}</h2>
                <img src={recipe.imageUrl} alt={recipe.title} />
              </Link>
            </div>
          ))}
        </div>

        <Routes> {/* Changed from Switch to Routes */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Updated component rendering syntax */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;