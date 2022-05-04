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
import {
  SECONDARY_BACKGROUND,
  TAB_BAR_ACTIVE_BACKGROUND,
  WHITE_1,
  WHITE_0,
} from '../constants/colors';

const MainNavigator = () => {
  const TabsNavigator = createBottomTabNavigator();
  const { Navigator, Screen } = TabsNavigator;

  return (
    <Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: WHITE_1,
        tabBarInactiveTintColor: WHITE_0,
        tabBarActiveBackgroundColor: TAB_BAR_ACTIVE_BACKGROUND,
        tabBarStyle: {
          backgroundColor: SECONDARY_BACKGROUND,
          borderTopColor: 'transparent',
        },
      }}
    >
      <Screen
        name={HOME_NAV}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="home" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name={LEADERBOARDS}
        component={LeaderboardsSceen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="globe" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name={FIND_MATCH_NAV}
        component={FindMatchNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="search" size={size} color={color} />;
          },
        }}
      />
      {/*
      <Screen
        name={SHOP_NAV}
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome name="shopping-cart" size={size} color={color} />
            );
          },
        }}
      />
       */}
      <Screen
        name={PROFILE_NAV}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name="user" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
};

export default MainNavigator;
