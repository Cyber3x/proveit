import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WHITE_0 } from '../constants/colors';

import { moderateScale } from 'react-native-size-matters';

const ProfileTextTab = props => {
  let rightStyle =
    props.textRight.length < 14 || props.textRight.length > 25
      ? styles.text
      : { ...styles.text, fontSize: moderateScale(8) };

  let rightText =
    props.textRight.length < 14
      ? props.textRight
      : props.textRight.slice(0, 10) + ' ...';
  return (
    <View style={styles.view}>
      <View style={styles.halfView}>
        <Text style={styles.text}>{props.textLeft}</Text>
      </View>
      <View style={styles.halfView}>
        <Text style={styles.text}>{rightText}</Text>
      </View>
    </View>
  );
};

export default ProfileTextTab;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Medium',
    color: WHITE_0,
    fontSize: moderateScale(14),
  },
  view: {
    borderBottomColor: WHITE_0,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
  },
  halfView: {
    width: '50%',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(2),
  },
});
