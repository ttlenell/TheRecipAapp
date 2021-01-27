import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default function CreateRecipe() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textstyle}>Create recipe screen</Text>
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
});
