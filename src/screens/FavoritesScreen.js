/* eslint-disable no-undef */
import React, {Fragment} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import Header from '../components/Header';

export default function FavoritesScreen({navigation}) {
  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView1} />
      <SafeAreaView style={safeAreaView2}>
        <Header />
        <View style={styles.container}>
          <Text>hej favorites</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
