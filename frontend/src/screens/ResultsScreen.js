import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FIND_MATCH} from '../constants/routeNames';

import NavButton from '../components/NavButton';

const ResultsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ResultsScreen</Text>
      <NavButton
        name="Home"
        navigate={() => props.navigation.navigate(FIND_MATCH)}
      />
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
