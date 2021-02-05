import React from 'react';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '../navigators/DrawerNavigation';
import CreateRecipeScreen from '../screens/CreateRecipe';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';

const MainStackScreens = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="HomeScreen" component={DrawerNavigator} />
      <MainStack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
      <MainStack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
