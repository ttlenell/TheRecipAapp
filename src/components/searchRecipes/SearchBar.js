import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';

const SearchBar = ({term, onTermSubmit, onTermChange}) => {
  // const [searchTerm, setSearchTerm] = useState('');
  const searchForRecipes = () => {};
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onTermChange}
        placeholder={'Search recipes'}
        autoCapitalize="none"
        value={term}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 50,
    borderRadius: 4,
    borderColor: 'black',
    justifyContent: 'center',
    margin: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
});
