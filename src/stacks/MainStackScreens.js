import React from 'react';
import 'react-native-gesture-handler';

// import HomeScreen from '../screens/HomeScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import SearchScreen from '../screens/SearchScreen';

import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '../Navigators/DrawerNavigation';
import DrawerContent from '../screens/DrawerContent';

// eslint-disable-next-line no-undef
export default MainStackScreens = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="HomeScreen" component={DrawerNavigator} />
    </MainStack.Navigator>
  );
};

// return (
//   <MainStack.Navigator
//     tabBarOptions={tabBarOptions}
//     screenOptions={screenOptions}>
//     <MainStack.Screen name="Search" component={SearchScreen} />
//     <MainStack.Screen name="Home" component={HomeScreen} />
//     <MainStack.Screen name="Favorites" component={FavoritesScreen} />
//   </MainStack.Navigator>
// );
