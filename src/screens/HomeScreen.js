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
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <ActivityIndicator size="large" color="black" />;
  }

  // useEffect(() => {
  //   const subscriber = firebase.getRecipes().onSnapshot((querySnapshot) => {
  //     const recipes = [];

  //     querySnapshot.forEach((documentSnapshot) => {
  //       recipes.push({
  //         title: documentSnapshot.data().name,
  //         key: documentSnapshot.id,
  //       });
  //     });
  //     setRecipes(recipes);
  //     setLoading(false);
  //   });
  //   return () => subscriber();
  // }, []);

  const getRecipesFromFirebase = async (recipes) => {
    // const recipes = [];

    try {
      firebase.getRecipes(recipes);
      console.log('fetching');
      console.log(recipes);
    } catch (error) {
      console.log('error fetching recipes from firebase', error);
    }
  };

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Button
          title="fetch"
          onPress={() => {
            getRecipesFromFirebase();
          }}
        />
        <FlatList
          style={styles.flatList}
          data={recipes}
          keyExtractor={({item, index}) => {
            return index;
          }}
          renderItem={({item}) => (
            <Text styles={styles.flatlistItems}>{item.name}</Text>
          )}
          ListEmptyComponent={
            <Text style={styles.textstyle}>No recipes added to firebase</Text>
          }
        />
        <FloatingActionBar
          onPressFunction={() => {
            navigation.navigate('CreateRecipe');
            console.log('fab pressed');
          }}
        />
        <Text>HOMESCREEN</Text>
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
