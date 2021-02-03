/* eslint-disable no-undef */
import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import RecipesList from '../components/searchRecipes/RecipesList';
import SearchBar from '../components/searchRecipes/SearchBar';
import useRecipes from '../hooks/useRecipes';

export default function SearchScreen({navigation}) {
  const [term, setTerm] = useState('');
  const [searchAPI, recipes] = useRecipes();

  return (
    <SafeAreaView>
      <Header />
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      <RecipesList title="Recipes from Tasty API" />
      <ScrollView></ScrollView>
      <View style={styles.container}>{/* <Text>hej search</Text> */}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
