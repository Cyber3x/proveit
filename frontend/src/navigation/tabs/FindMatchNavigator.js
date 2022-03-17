import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  ACTIVE_MATCH,
  CREATE_MATCH,
  FIND_MATCH,
  LOBBY,
  RESULTS,
  VIEW_MATCHES,
} from '../../constants/routeNames';
import ActiveMatchScreen from '../../screens/ActiveMatchScreen';
import CreateMatchScreen from '../../screens/CreateMatchScreen';
import FindMatchScreen from '../../screens/FindMatchScreen';
import LobbyScreen from '../../screens/LobbyScreen';
import ResultsScreen from '../../screens/ResultsScreen';
import ViewMatchesScreen from '../../screens/ViewMatchesScreen';

const FindMatchNavigator = () => {
  const FindMatchNav = createStackNavigator();
  return (
    <FindMatchNav.Navigator
      initialRouteName={FIND_MATCH}
      screenOptions={{
        headerShown: false,
      }}>
      <FindMatchNav.Screen name={FIND_MATCH} component={FindMatchScreen} />
      <FindMatchNav.Screen
        name={CREATE_MATCH}
        component={CreateMatchScreen}></FindMatchNav.Screen>
      <FindMatchNav.Screen
        name={VIEW_MATCHES}
        component={ViewMatchesScreen}></FindMatchNav.Screen>
      <FindMatchNav.Screen
        name={LOBBY}
        component={LobbyScreen}></FindMatchNav.Screen>
      <FindMatchNav.Screen
        name={ACTIVE_MATCH}
        component={ActiveMatchScreen}></FindMatchNav.Screen>
      <FindMatchNav.Screen
        name={RESULTS}
        component={ResultsScreen}></FindMatchNav.Screen>
    </FindMatchNav.Navigator>
  );
};

export default FindMatchNavigator;
