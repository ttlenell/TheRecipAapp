/* eslint-disable no-undef */
import React, {useState, Fragment} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import RecipesList from '../components/searchRecipes/RecipesList';
import SearchBar from '../components/searchRecipes/SearchBar';
import useRecipes from '../hooks/useRecipes';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchAPI, recipes] = useRecipes();

  return (
    <Fragment>
      <SafeAreaView
        style={{flex: 0, backgroundColor: '#8490B8'}}></SafeAreaView>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
    </Fragment>
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
