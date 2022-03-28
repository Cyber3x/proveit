import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LOGIN, MAIN_NAV, REGISTER } from '../constants/routeNames';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import MainNavigator from './MainNavigator';

const AuthNavigator = () => {
  const AuthNavigator = createStackNavigator();
  return (
    <AuthNavigator.Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthNavigator.Screen name={LOGIN} component={LoginScreen} />
      <AuthNavigator.Screen name={REGISTER} component={RegisterScreen} />
      <AuthNavigator.Screen name={MAIN_NAV} component={MainNavigator} />
    </AuthNavigator.Navigator>
  );
};

export default AuthNavigator;
