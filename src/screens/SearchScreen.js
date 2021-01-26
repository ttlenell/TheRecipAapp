/* eslint-disable no-undef */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/Header';

export default function SearchScreen({navigation}) {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text>hej search</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
