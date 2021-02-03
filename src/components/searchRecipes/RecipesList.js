import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

const RecipesList = ({title, recipes}) => {
  // if (!recipes.length) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({item}) => {
          <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default RecipesList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 5,
  },
});
