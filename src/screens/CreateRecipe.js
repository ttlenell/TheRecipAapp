import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import SaveRecipe from '../components/createRecipe/SaveRecipe';

// import {IngredientInput} from '../components/createRecipe/IngredientInput';
import {IngredientInput} from '../components/createRecipe/IngredientInput';
import RecipeInput from '../components/createRecipe/RecipeInput';

export default function CreateRecipe() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeName, setRecipeName] = useState();

  var recipeText = recipeName
    ? recipeName
    : 'Click the button below to change the name of the recipe!';
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textstyle}>{recipeText}</Text>

        <RecipeInput setRecipeName={setRecipeName} />

        <Text style={styles.textstyle}>Ingredients:</Text>
        <FlatList
          style={styles.flatList}
          data={ingredients}
          keyExtractor={({item, index}) => {
            return index;
          }}
          renderItem={({item}) => (
            <View style={{flexDirection: 'column-reverse'}}>
              <Text style={styles.flatListItems}>
                Name: {item.name}, Category: {item.category} Amount:{' '}
                {item.amount} {item.measure}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.textstyle}>No ingredients added yet!</Text>
          }
        />
        <IngredientInput setIngredient={setIngredients} />
        <SaveRecipe />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // flexDirection: 'column',
    // marginHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'black',
  },
  textstyle: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  flatList: {
    width: 350,
  },
  flatListItems: {
    fontSize: 20,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'black',
  },
});
