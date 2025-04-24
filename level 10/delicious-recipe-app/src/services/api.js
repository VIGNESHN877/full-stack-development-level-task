import axios from 'axios';

const API_KEY = '14d73952b25a4b288441bb4694f44b8a'; // Get from https://spoonacular.com/food-api

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: API_KEY,
    number: 10
  }
});

export const getPopularRecipes = () => {
  return api.get('/random', {
    params: {
      tags: 'vegetarian'
    }
  });
};

export const searchRecipes = (query) => {
  return api.get('/complexSearch', {
    params: {
      query,
      instructionsRequired: true
    }
  });
};

export const getRecipeDetails = (id) => {
  return api.get(`/${id}/information`, {
    params: {
      includeNutrition: false
    }
  });
};

export const getRecipesByCuisine = (cuisine) => {
  return api.get('/complexSearch', {
    params: {
      cuisine
    }
  });
};