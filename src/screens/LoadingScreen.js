import React, {useContext, useEffect} from 'react';

import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {UserContext} from '../context/UserContext';
import {FirebaseContext} from '../context/FirebaseContext';

// eslint-disable-next-line no-undef
export default LoadingScreen = () => {
  const [, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();

      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);

        setUser({
          isLoggedIn: true,
          email: userInfo.email,
          uid: user.uid,
          username: userInfo.username,
          profilePhotoUrl: userInfo.profilePhotoUrl,
        });
      } else {
        setUser((state) => ({...state, isLoggedIn: false}));
      }
    }, 500);
  }, [firebase, setUser]);

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Please wait</Text>
      <Text style={styles.text2}>Loading The Recipe app....</Text>
      <ActivityIndicator
        size="large"
        color=" black"
        style={styles.indicatorStyle}
        animating={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 60,
    fontStyle: 'normal',
  },
  text2: {
    fontSize: 45,
    fontStyle: 'italic',
    marginTop: 50,
  },
  indicatorStyle: {
    width: 400,
    height: 400,
  },
});
