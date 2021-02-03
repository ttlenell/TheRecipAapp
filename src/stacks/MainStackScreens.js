import React from 'react';
import 'react-native-gesture-handler';

// import HomeScreen from '../screens/HomeScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import SearchScreen from '../screens/SearchScreen';

import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '../navigators/DrawerNavigation';
import CreateRecipeScreen from '../screens/CreateRecipe';

// eslint-disable-next-line no-undef
export default MainStackScreens = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="HomeScreen" component={DrawerNavigator} />
      <MainStack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
    </MainStack.Navigator>
  );
};
