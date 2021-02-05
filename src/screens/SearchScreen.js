/* eslint-disable no-undef */
import React, {useState, Fragment} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import RecipesList from '../components/searchRecipes/RecipesList';
import SearchBar from '../components/searchRecipes/SearchBar';
import useRecipes from '../hooks/useRecipes';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchAPI, recipes] = useRecipes();

  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView1} />
      <SafeAreaView style={styles.safeAreaView2}>
        <Header />
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchAPI(term)}
        />
        <RecipesList title="Recipes from Tasty API" />

        <View style={styles.container} />
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
  safeAreaView1: {
    flex: 0,
    backgroundColor: '#8490B8',
  },
  safeAreaView2: {
    flex: 1,
    backgroundColor: 'white',
  },
});
