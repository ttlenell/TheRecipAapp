import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabsNavigator from './BottomTabNavigation';
import DrawerContent from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerStyle={styles.drawStyle}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="hej" component={BottomTabsNavigator} />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  drawStyle: {
    width: 320,
  },
});

export default DrawerNavigator;
