import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ACTIVE_MATCH, FIND_MATCH} from '../constants/routeNames';

import NavButton from '../components/NavButton';

const LobbyScreen = props => {
  return (
    <View style={styles.container}>
      <Text>LobbyScreen</Text>
      <NavButton
        name="Leave"
        navigate={() => props.navigation.replace(FIND_MATCH)}
      />
      <NavButton
        name="Start"
        navigate={() => props.navigation.navigate(ACTIVE_MATCH)}
      />
      <NavButton
        name="Cancel"
        navigate={() => props.navigation.replace(FIND_MATCH)}
      />
    </View>
  );
};

export default LobbyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
