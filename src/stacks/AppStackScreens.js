import React, {useContext} from 'react';

import {UserContext} from '../context/UserContext';

import AuthStackScreens from './AuthStackScreens';
import MainStackScreens from './MainStackScreens';
import LoadingScreen from '../screens/LoadingScreen';

// eslint-disable-next-line no-undef
export default AppStackScreens = () => {
  const [user] = useContext(UserContext);

  return user.isLoggedIn === null ? (
    <LoadingScreen />
  ) : user.isLoggedIn ? (
    <MainStackScreens />
  ) : (
    <AuthStackScreens />
  );
};
