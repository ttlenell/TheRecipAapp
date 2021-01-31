import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export const IngredientInput = ({setIngredient}) => {
  const [textInput, setTextInput] = useState('');

  const addIngredient = () => {
    setIngredient((prev) => {
      console.log('PREV:', prev);
      return [...prev, {id: '"random" id for now', name: textInput}];
    });
  };

  return (
    <View>
      <TextInput
        style={styles.recipeInput}
        value={textInput}
        onChangeText={(text) => {
          setTextInput(text);
        }}
      />
      <Button
        title="Submit"
        onPress={() => {
          addIngredient();
          setTextInput('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipeInput: {
    // top: 20,
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 20,
  },
});
