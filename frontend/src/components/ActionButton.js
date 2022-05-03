import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { WHITE_1, GREEN_MAIN } from '../constants/colors';

const NavButton = ({ name, onPress, width = 200, style }) => {
  return (
    <Pressable
      style={[styles.container, { width: moderateScale(width) }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(40),
    borderRadius: moderateScale(7.5),
    backgroundColor: GREEN_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 15,
  },
  text: {
    color: WHITE_1,
    fontSize: moderateScale(14),
    fontFamily: 'OpenSans-Bold',
  },
});
