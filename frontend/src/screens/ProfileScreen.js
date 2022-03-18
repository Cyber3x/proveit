import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {APP_NAV, AUTH_NAV, SCHEDULED} from '../constants/routeNames';

import NavButton from '../components/NavButton';
import {setLogin} from '../store/actions/auth';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <NavButton
        name="Login"
        navigate={() => {
          dispatch(setLogin(false));
          props.navigation.navigate(APP_NAV);
          navigation.reset({
            index: 0,
            routes: [{name: AUTH_NAV}],
          });
        }}
      />
      <NavButton
        name="Scheduled"
        navigate={() => props.navigation.navigate(SCHEDULED)}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
