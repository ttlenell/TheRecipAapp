import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {UserContext} from '../context/UserContext';
import {FirebaseContext} from '../context/FirebaseContext';

export default function DrawerContent(props) {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state) => ({...state, isLoggedIn: false}));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.drawerText}>Dark mode?</Text>
      <View style={{bottom: 25}}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => logOut()}>
          <Text style={styles.drawerText}>Sign Out</Text>
          <Icon name="sign-out" size={50} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  logoutButton: {
    justifyContent: 'center',
    top: 400,
    alignItems: 'center',
  },
  drawerText: {
    alignSelf: 'center',
    fontSize: 25,
  },
});
