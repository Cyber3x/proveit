import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useStore } from '../store/globalStore';
import { MAIN_BACKGROUND, WHITE_0 } from '../constants/colors';
import LeaderboardTab from '../components/LeaderboardTab';
import { moderateScale, s } from 'react-native-size-matters';
import { MaterialIcons } from '@expo/vector-icons';
import * as Sports from '../constants/sports';

const LeaderboardsSceen = props => {
  const currentSport = useStore(state => state.currentSport);
  let sport = '';
  switch (currentSport) {
    case Sports.BASKETBALL:
      sport = 'KOŠARKA';
      break;
    case Sports.FOOTBALL:
      sport = 'NOGOMET';
      break;
    case Sports.HANDBALL:
      sport = 'RUKOMET';
      break;
    case Sports.TENIS:
      sport = 'TENIS';
      break;
    case Sports.VOLLEYBALL:
      sport = 'ODBOJKA';
      break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTop}>{sport} TOP 10</Text>
        <MaterialIcons
          name="leaderboard"
          size={moderateScale(26)}
          color={WHITE_0}
        />
      </View>
      <LeaderboardTab position={1} elo={2500} name="Marko Marulić" />
      <LeaderboardTab position={2} elo={2400} name="Marko Marulić 2" />
      <LeaderboardTab position={3} elo={2300} name="Marko Marulić 3" />
      <LeaderboardTab position={4} elo={2200} name="Marko Marulić 4" />
      <LeaderboardTab position={5} elo={2100} name="Marko Marulić 4" />
      <LeaderboardTab position={6} elo={2500} name="Marko Marulić" />
      <LeaderboardTab position={7} elo={2400} name="Marko Marulić 2" />
      <LeaderboardTab position={8} elo={2300} name="Marko Marulić 3" />
      <LeaderboardTab position={9} elo={2200} name="Marko Marulić 4" />
      <LeaderboardTab position={10} elo={2100} name="Marko Marulić 4" />
    </View>
  );
};

export default LeaderboardsSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: MAIN_BACKGROUND,
    width: '100%',
    height: '100%',
  },
  text: {
    color: WHITE_0,
  },
  top: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  textTop: {
    fontFamily: 'OpenSans-Bold',
    fontSize: moderateScale(22),
    color: WHITE_0,
  },
});
