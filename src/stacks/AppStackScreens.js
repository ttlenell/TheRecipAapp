import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {UserContext} from '../context/UserContext';

import AuthStackScreens from './AuthStackScreens';
import MainStackScreens from './MainStackScreens';
import LoadingScreen from '../screens/LoadingScreen';

// eslint-disable-next-line no-undef
export default AppStackScreens = () => {
  const AppStack = createStackNavigator();
  const [user] = useContext(UserContext);

  return user.isLoggedIn === null ? (
    <LoadingScreen />
  ) : user.isLoggedIn ? (
    <MainStackScreens />
  ) : (
    <AuthStackScreens />
  );
};
