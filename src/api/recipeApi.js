import firebase from 'firebase/app';
import 'firebase/auth';

export function addRecipe(recipe, addComplete) {
  recipe.createdAt = firebase.firestore.FieldValue.serverTimestamp();

  firebase
    .firestore()
    .collection('Streams')
    .add(recipe)
    .then((snapshot) => {
      recipe.id = snapshot.id;
      snapshot.set(recipe);
    })
    .then(() => addComplete(recipe))
    .catch((error) => console.log(error));
}

export async function getRecipes(recipesRetreived) {
  var recipeList = [];

  var snapshot = await firebase
    .firestore()
    .collection('Recipes')
    .orderBy('createdAt')
    .get();

  snapshot.forEach((doc) => {
    const recipeItem = doc.data();
    recipeItem.id = doc.id;
    recipeList.unshift(recipeItem);
  });
  streamsRetreived(recipeList);
}
