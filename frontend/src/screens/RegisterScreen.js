import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import NavButton from '../components/NavButton';
import {LOGIN, MAIN_NAV} from '../constants/routeNames';

const RegisterScreen = props => {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
      <NavButton
        name="Login"
        navigate={() => props.navigation.navigate(LOGIN)}
      />
      <NavButton
        name="Home"
        navigate={() => props.navigation.replace(MAIN_NAV)}
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
