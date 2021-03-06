import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './customSideBarMenu';
import SettingScreen from '../screens/settingScreen';

export const DrawerNavigator = createDrawerNavigator({
 Home: {
     screen: AppTabNavigator
 },
 Setting: {
     screen: SettingScreen
 }
},
 {
     contentComponent: CustomSideBarMenu
 },
 {
     initialRouteName: "Welcome"
 }
)