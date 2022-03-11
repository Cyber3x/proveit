import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LOBBY} from '../constants/routeNames';

import NavButton from '../components/NavButton';

const CreateMatchScreen = props => {
  return (
    <View style={styles.container}>
      <Text>CreateMatchScreen</Text>
      <NavButton
        name="Create"
        navigate={() => props.navigation.navigate(LOBBY)}
      />
    </View>
  );
};

export default CreateMatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
