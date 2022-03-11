import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import NavButton from '../components/NavButton';
import {HOME, LOBBY} from '../constants/routeNames';

const ViewMatchesScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ViewMatchesScreen</Text>
      <NavButton
        name="Join match"
        navigate={() => props.navigation.replace(LOBBY)}
      />
    </View>
  );
};

export default ViewMatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
