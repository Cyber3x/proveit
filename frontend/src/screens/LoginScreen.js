import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavButton from '../components/NavButton';
import {REGISTER, MAIN_NAV} from '../constants/routeNames';
import {useDispatch} from 'react-redux';
import {setLogin} from '../store/actions/auth';

const LoginScreen = props => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <NavButton
        name="Register"
        navigate={() => {
          props.navigation.navigate(REGISTER);
        }}
      />
      <NavButton
        name="Home"
        navigate={() => {
          props.navigation.replace(MAIN_NAV);
          dispatch(setLogin(true));
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
