// import firebase from 'firebase/app';
// import 'firebase/auth';
// import {v1 as uuidv1} from 'uuid';

// export function addRecipe(recipe, addComplete) {
//   recipe.createdAt = firebase.firestore.FieldValue.serverTimestamp();

//   firebase
//     .firestore()
//     .collection('Streams')
//     .add(recipe)
//     .then((snapshot) => {
//       recipe.id = snapshot.id;
//       snapshot.set(recipe);
//     })
//     .then(() => addComplete(recipe))
//     .catch((error) => console.log(error));
// }

// export async function getRecipes(recipesRetreived) {
//   var recipeList = [];

//   var snapshot = await firebase
//     .firestore()
//     .collection('recipes')
//     .orderBy('createdAt')
//     .get();

//   snapshot.forEach((doc) => {
//     const recipeItem = doc.data();
//     recipeItem.id = doc.id;
//     recipeList.unshift(recipeItem);
//   });
//   recipesRetreived(recipeList);
// }

// export function updateRecipe(recipe, updateComplete) {
//   recipe.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
//   console.log('Updating recipe in firebase');

//   firebase
//     .firestore()
//     .collection('Recipes')
//     .doc(recipe.id)
//     .set(recipe)
//     .then(() => updateComplete(recipe))
//     .catch((error) => console.log(error));
// }

// export function deleteRecipe(recipe, deleteComplete) {
//   console.log(recipe);

//   firebase
//     .firestore()
//     .collection('Recipes')
//     .doc(recipe.id)
//     .delete()
//     .then(() => deleteComplete())
//     .catch((error) => console.log(error));
// }
