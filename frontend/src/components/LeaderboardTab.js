import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import {
  BLUE_GLASS,
  GRAY_MAIN,
  SECONDARY_BACKGROUND,
  WHITE_1,
} from '../constants/colors';

const LeaderboardTab = props => {
  let positionColor = GRAY_MAIN;
  switch (props.position) {
    case 1:
      positionColor = '#FFD700';
      break;
    case 2:
      positionColor = WHITE_1;
      break;
    case 3:
      positionColor = '#CD7F32';
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '50%',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ ...styles.text, color: positionColor }}>
          #{props.position}
        </Text>
        <View style={{ width: '80%' }}>
          <Text style={{ ...styles.text, color: positionColor }}>
            {props.name}
          </Text>
        </View>
      </View>
      <Text style={{ ...styles.text, color: positionColor }}>{props.elo}</Text>
    </View>
  );
};

export default LeaderboardTab;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: moderateScale(40),
    backgroundColor: BLUE_GLASS,
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Medium',
    fontSize: moderateScale(14),
    color: GRAY_MAIN,
    textAlign: 'left',
  },
});
