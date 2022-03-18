import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { AUTH_NAV, MAIN_NAV } from '../constants/routeNames';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
  const AppNav = createStackNavigator();

  let isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <AppNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isLoggedIn ? MAIN_NAV : AUTH_NAV}
    >
      <AppNav.Screen name={MAIN_NAV} component={MainNavigator} />
      <AppNav.Screen name={AUTH_NAV} component={AuthNavigator} />
    </AppNav.Navigator>
  );
};

export default AppNavigator;
