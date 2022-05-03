import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HOME, LOBBY, VIEW_MATCHES } from '../../constants/routeNames';
import HomeScreen from '../../screens/HomeScreen';
import LobbyScreen from '../../screens/LobbyScreen';
import ViewMatchesScreen from '../../screens/ViewMatchesScreen';

const HomeNavigator = () => {
  const HomeNav = createStackNavigator();
  return (
    <HomeNav.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <HomeNav.Screen name={HOME} component={HomeScreen}></HomeNav.Screen>
      <HomeNav.Screen
        name={VIEW_MATCHES}
        component={ViewMatchesScreen}
      ></HomeNav.Screen>
      <HomeNav.Screen name={LOBBY} component={LobbyScreen}></HomeNav.Screen>
    </HomeNav.Navigator>
  );
};

export default HomeNavigator;
