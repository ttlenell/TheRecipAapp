/* eslint-disable no-undef */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import Header from '../components/Header';

export default function FavoritesScreen({navigation}) {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text>hej favorites</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
