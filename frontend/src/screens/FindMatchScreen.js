import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CREATE_MATCH, VIEW_MATCHES} from '../constants/routeNames';

import NavButton from '../components/NavButton';

const FindMatchScreen = props => {
  return (
    <View style={styles.container}>
      <Text>FindMatchScreen</Text>
      <NavButton
        name="Create match"
        navigate={() => props.navigation.navigate(CREATE_MATCH)}
      />
      <NavButton
        name="View matches"
        navigate={() => props.navigation.navigate(VIEW_MATCHES)}
      />
    </View>
  );
};

export default FindMatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
