import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RESULTS} from '../constants/routeNames';

import NavButton from '../components/NavButton';

const ActiveMatchScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ActiveMatchScreen</Text>
      <NavButton
        name="Results"
        navigate={() => props.navigation.navigate(RESULTS)}
      />
    </View>
  );
};

export default ActiveMatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
