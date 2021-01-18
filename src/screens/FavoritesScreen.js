/* eslint-disable no-undef */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function FavoritesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>hej favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
