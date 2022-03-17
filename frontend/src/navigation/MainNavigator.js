import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  FIND_MATCH_NAV,
  HOME,
  HOME_NAV,
  LEADERBOARDS,
  PROFILE_NAV,
  SHOP_NAV,
} from '../constants/routeNames';
import LeaderboardsSceen from '../screens/LeaderboardsSceen';
import FindMatchNavigator from './tabs/FindMatchNavigator';
import HomeNavigator from './tabs/HomeNavigator';
import ProfileNavigator from './tabs/ProfileNavigator';
import ShopNavigator from './tabs/ShopNavigator';
import { FontAwesome } from '@expo/vector-icons';

const MainNavigator = () => {
  const TabsNavigator = createBottomTabNavigator();
  return (
    <TabsNavigator.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <TabsNavigator.Screen
        name={HOME_NAV}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="home" size={size} color={color} />;
          },
        }}
      />
      <TabsNavigator.Screen name={LEADERBOARDS} component={LeaderboardsSceen} />
      <TabsNavigator.Screen
        name={FIND_MATCH_NAV}
        component={FindMatchNavigator}
      />
      <TabsNavigator.Screen name={SHOP_NAV} component={ShopNavigator} />
      <TabsNavigator.Screen name={PROFILE_NAV} component={ProfileNavigator} />
    </TabsNavigator.Navigator>
  );
};

export default MainNavigator;
