import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {UserContext} from '../context/UserContext';
import {FirebaseContext} from '../context/FirebaseContext';

export default function DrawerContent(props) {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);
  const [displayName, setDisplayName] = useState('');

  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state) => ({...state, isLoggedIn: false}));
    }
  };

  useEffect(() => {
    firebase.showDisplayName().then(setDisplayName).catch(console.log('error'));
    // firebase.showDisplayName().then((value) => {
    //   console.log(value);
    // });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.drawerText}>Logged in user:</Text>
      <Text style={styles.drawerText}>{user.username}</Text>
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
    backgroundColor: '#8490B8',
  },
  logoutButton: {
    justifyContent: 'center',
    top: 320,
    alignItems: 'center',
  },
  drawerText: {
    alignSelf: 'center',
    fontSize: 25,
  },
});
