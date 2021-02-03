import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import {FirebaseContext} from '../context/FirebaseContext';

import Header from '../components/Header';
import FloatingActionBar from '../components/FloatingActionBar';

//...
export default function Home({navigation}) {
  const firebase = useContext(FirebaseContext);
  const [recipesList, setRecipesList] = useState([]);
  const [loading, setLoading] = useState(false);

  {
    loading && <ActivityIndicator size="large" color="black" />;
  }

  const getRecipesFromFirebase = async () => {
    try {
      const recipes = await firebase.getRecipes();
      setRecipesList(recipes);
      console.log('fetching');
      console.log('from homescreen', recipes);
    } catch (error) {
      console.log('error fetching recipes from firebase', error);
    }
  };

  useEffect(() => {
    firebase.getRecipes().then(setRecipesList).catch(console.log('error'));
  }, []);

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        {/* <Button
          title="fetch"
          onPress={() => {
            getRecipesFromFirebase();
          }}
        /> */}
        <View style={styles.fab}>
          <FloatingActionBar
            onPressFunction={() => {
              navigation.navigate('CreateRecipe');
              console.log('fab pressed');
            }}
          />
        </View>
        <FlatList
          style={styles.flatList}
          data={recipesList}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => (
            <Text style={styles.flatListItems}>
              {item.recipeName}
              {/* {item.id} */}
            </Text>
          )}
          ListEmptyComponent={
            <Text style={styles.textstyle}>No recipes added to firebase</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'black',
  },
  fab: {
    top: 400,

    zIndex: 2,
  },
  textstyle: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  flatList: {
    width: 350,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
  },
  flatListItems: {
    fontSize: 40,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'black',
    marginTop: 10,
  },
});
