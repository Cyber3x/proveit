import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  APP_NAV,
  AUTH_NAV,
  LOGIN,
  PROFILE,
  SCHEDULED,
} from '../../constants/routeNames';
import ProfileScreen from '../../screens/ProfileScreen';
import ScheduledMatchesScreen from '../../screens/ScheduledMatchesScreen';
import AppNavigator from '../AppNavigator';

const ProfileNavigator = () => {
  const ProfileNav = createStackNavigator();
  return (
    <ProfileNav.Navigator
      initialRouteName={PROFILE}
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileNav.Screen
        name={PROFILE}
        component={ProfileScreen}></ProfileNav.Screen>
      <ProfileNav.Screen
        name={SCHEDULED}
        component={ScheduledMatchesScreen}></ProfileNav.Screen>
      <ProfileNav.Screen
        name={APP_NAV}
        component={AppNavigator}></ProfileNav.Screen>
    </ProfileNav.Navigator>
  );
};

export default ProfileNavigator;
