import {createStore} from 'redux';
import {ADD_RECIPE, REMOVE_RECIPE} from './actionTypes';

function reducerFunction(state = [], action) {
  console.log('reducer function was called');
  const {recipeList} = state;

  switch (action.type) {
    case ADD_RECIPE:
      const newRecipe = action.payload;
      console.log('adding new recipe: ', newRecipe);
      console.log('array after adding item: ', [...recipeList, newRecipe]);
      return {recipeList: [...recipeList, newRecipe]};
    case REMOVE_RECIPE:
      const idToRemove = action.payload;
      let updatedRecipeList = recipeList.filter(
        (item) => item.id !== idToRemove,
      );
      //return {recipeList: updatedRecipeList};
      return updatedRecipeList
    default:
      return state;
  }
}

export const store = createStore(reducerFunction);