import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';

export const SearcBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setSearchTerm(text)}
        placeholder={'Sök recept'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'black',
    justifyContent: 'center',
  },
});
