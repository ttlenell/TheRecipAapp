import React, {useContext, useEffect} from 'react';

import {View, Text} from 'react-native';
import {UserContext} from '../context/UserContext';
import {FirebaseContext} from '../context/FirebaseContext';

// eslint-disable-next-line no-undef
export default LoadingScreen = () => {
  const [_, setUser] = useContext(UserContext);
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
    <View>
      <Text>HEJ</Text>
    </View>
  );
};
