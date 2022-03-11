import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  FIND_MATCH,
  FIND_MATCH_NAV,
  HOME,
  HOME_NAV,
  LEADERBOARDS,
  PROFILE_NAV,
  SHOP_NAV,
} from '../constants/routeNames';
import FindMatchScreen from '../screens/FindMatchScreen';
import LeaderboardsSceen from '../screens/LeaderboardsSceen';
import FindMatchNavigator from './tabs/FindMatchNavigator';
import HomeNavigator from './tabs/HomeNavigator';
import ProfileNavigator from './tabs/ProfileNavigator';
import ShopNavigator from './tabs/ShopNavigator';

const MainNavigator = () => {
  const TabsNavigator = createBottomTabNavigator();
  return (
    <TabsNavigator.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <TabsNavigator.Screen
        name={HOME_NAV}
        component={HomeNavigator}></TabsNavigator.Screen>
      <TabsNavigator.Screen
        name={LEADERBOARDS}
        component={LeaderboardsSceen}></TabsNavigator.Screen>
      <TabsNavigator.Screen
        name={FIND_MATCH_NAV}
        component={FindMatchNavigator}></TabsNavigator.Screen>
      <TabsNavigator.Screen
        name={SHOP_NAV}
        component={ShopNavigator}></TabsNavigator.Screen>
      <TabsNavigator.Screen
        name={PROFILE_NAV}
        component={ProfileNavigator}></TabsNavigator.Screen>
    </TabsNavigator.Navigator>
  );
};

export default MainNavigator;
