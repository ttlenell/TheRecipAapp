/* eslint-disable no-undef */
import React, {Fragment} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import Header from '../components/Header';

export default function FavoritesScreen({navigation}) {
  return (
    <Fragment>
      <SafeAreaView
        style={{flex: 0, backgroundColor: '#8490B8'}}></SafeAreaView>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
});
