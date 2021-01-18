/* eslint-disable no-undef */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function SearchScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>hej search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
