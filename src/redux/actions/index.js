import { getMeals, getMealsCategory } from '../../helpers/FetchMealsAPI';
import { getDrinks, getDrinksCategory } from '../../helpers/FetchDrinksAPI';

export const ADD_RECIPES = 'ADD_RECIPES';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export function addRecipes(payload) {
  return {
    type: ADD_RECIPES,
    payload,
  };
}

export function getCategories(payload) {
  return {
    type: GET_CATEGORIES,
    payload,
  };
}

export const fetchRecipes = (type) => async (dispatch) => {
  if (type === 'meals') {
    const meals = await getMeals();
    dispatch(addRecipes(meals.meals));
  }
  if (type === 'drinks') {
    const drinks = await getDrinks();
    dispatch(addRecipes(drinks.drinks));
  }
};

export const fetchCategories = (type) => async (dispatch) => {
  if (type === 'meals') {
    const meals = await getMealsCategory();
    dispatch(getCategories(meals.meals));
  }
  if (type === 'drinks') {
    const drinks = await getDrinksCategory();
    dispatch(getCategories(drinks.drinks));
  }
};
