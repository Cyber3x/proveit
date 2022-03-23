import { StyleSheet, Text, Pressable, View } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { WHITE_1, GREEN_MAIN } from '../constants/colors';

const NavButton = props => {
  return (
    <View>
      <Pressable style={styles.container} onPress={props.onPress}>
        <Text style={styles.text}>{props.name}</Text>
      </Pressable>
    </View>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  container: {
    width: moderateScale(200),
    height: moderateScale(45),
    borderRadius: moderateScale(15),
    backgroundColor: GREEN_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 15,
  },
  text: {
    color: WHITE_1,
    fontSize: moderateScale(18),
    fontFamily: 'OpenSans-Bold',
  },
});
