import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useStore } from '../store/globalStore';
import { BLUE_GLASS, MAIN_BACKGROUND, WHITE_0 } from '../constants/colors';

const LeaderboardsSceen = props => {
  const currentSport = useStore(state => state.currentSport);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LeaderboardsSceen</Text>
      <Text style={styles.text}>{currentSport}</Text>
      <Text style={styles.text}>Im here</Text>
    </View>
  );
};

export default LeaderboardsSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_BACKGROUND,
  },
  text: {
    color: WHITE_0,
  },
});
