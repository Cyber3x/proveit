import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { GRAY_MAIN } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const PlayerDisplay = ({ name }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.rankedText}>Gold 3</Text>
      </View>
      <View
        style={{ marginRight: moderateScale(10), justifyContent: 'center' }}
      >
        <Ionicons name="person" size={moderateScale(30)} color={GRAY_MAIN} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(50),
    borderBottomColor: GRAY_MAIN,
    borderBottomWidth: 1,
    marginBottom: moderateScale(15),
    marginTop: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'OpenSans-Medium',
    fontSize: moderateScale(18),
    color: 'whitesmoke',
    paddingBottom: moderateScale(4),
  },
  rankedText: {
    fontSize: moderateScale(14),
    color: GRAY_MAIN,
    fontFamily: 'OpenSans-Medium',
  },
});

export default PlayerDisplay;
