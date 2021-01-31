import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const SaveRecipe = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.openButton}>
        <Text>Save to firebase</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', margin: 10},
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',

    width: 250,
  },
});

export default SaveRecipe;
