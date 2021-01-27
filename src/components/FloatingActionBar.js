import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FloatingActionBar({onPressFunction}) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => onPressFunction()}>
        <Icon
          name="add-circle"
          size={75}
          color={'red'}
          style={{margin: -6, bottom: 3, left: 1}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // borderWidth: 1,
    // borderColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    width: 60,
    position: 'absolute',
    top: 150,
    left: 100,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 100,
  },
});
