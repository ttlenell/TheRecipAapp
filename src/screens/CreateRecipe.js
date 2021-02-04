import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {StackActions} from '@react-navigation/native';
import {FirebaseContext} from '../context/FirebaseContext';

import {IngredientInput} from '../components/createRecipe/IngredientInput';
import RecipeInput from '../components/createRecipe/RecipeInput';
import CookingInstructionsInput from '../components/createRecipe/CookingInstructionsInput';

export default function CreateRecipe({navigation}) {
  const [ingredients, setIngredients] = useState([]);
  const [recipeName, setRecipeName] = useState();
  const [cookingText, setCookingText] = useState();
  const [timer, setTimer] = useState();
  const [id, setId] = useState('');
  const firebase = useContext(FirebaseContext);

  const addRecipeToFirebase = async () => {
    const recipe = {recipeName, ingredients, id, cookingText, timer};

    try {
      firebase.addRecipe(recipe);
      navigation.dispatch(StackActions.popToTop());
    } catch (error) {
      console.log('error saving to firebase', error);
    }
  };

  var timerSet = timer ? timer + ' minutes' : 'Your set timer will show here';

  var cookingTextBox = cookingText
    ? cookingText
    : 'No cooking information added yet!';

  var recipeText = recipeName
    ? recipeName
    : 'Click the button below to change the name of the recipe!';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.recipeName}>{recipeText}</Text>
      <RecipeInput setRecipeName={setRecipeName} />

      <View style={styles.flatList}>
        <FlatList
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
            <Text style={styles.flatListItems}>No ingredients added yet!</Text>
          }
        />
      </View>
      <View style={styles.cookingTextView}>
        <Text
          style={{
            ...styles.textStyle,
            fontSize: 15,
            color: 'black',
            textAlign: 'left',
          }}>
          {cookingTextBox}
        </Text>
      </View>
      <View style={styles.timer}>
        <Text style={{...styles.textStyle, fontSize: 20, color: 'black'}}>
          Timer set to: {timerSet}
        </Text>
      </View>
      <IngredientInput setIngredient={setIngredients} />
      <CookingInstructionsInput
        setCookingText={setCookingText}
        setTimerNumber={setTimer}
      />
      <TouchableOpacity
        style={styles.saveRecipe}
        onPress={() => {
          addRecipeToFirebase();
        }}>
        <Text style={{...styles.textStyle, fontSize: 15}}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    // flexDirection: 'column',
    // marginHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'black',
  },
  timer: {
    bottom: 100,
  },
  cookingTextView: {
    width: 350,
    height: 250,
    bottom: 110,
    borderWidth: 2,
    borderColor: 'black',
  },

  recipeName: {
    color: 'black',
    top: 10,
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flatList: {
    width: 350,
    height: 250,
    marginBottom: 100,
    bottom: 20,
    borderColor: 'black',
    borderWidth: 2,
  },
  flatListItems: {
    fontSize: 18,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'black',
  },
  saveRecipe: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    width: 170,
    top: 0,
    left: 110,
  },
});
