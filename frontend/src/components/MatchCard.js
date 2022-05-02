import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  GRAY_MAIN,
  GREEN_MAIN,
  SECONDARY_BACKGROUND,
  WHITE_1,
  WHITE_0,
  YELLOW_WARNING,
} from '../constants/colors';
import { LOBBY } from '../constants/routeNames';

import { getImage, getName } from '../utils/getBasedOnSport';

const MatchCard = ({ match, navigation }) => {
  const { sport, playerCountText, statusText } = match;
  console.log('match data: ', match);

  return (
    <View style={styles.container}>
      <ImageBackground source={getImage(sport)} style={styles.sportImage}>
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', SECONDARY_BACKGROUND]}
          start={[0.2, 0.5]}
          end={[0.8, 0.5]}
        >
          <View style={styles.leftPart}>
            <Text style={styles.sportText}>{getName(sport)}</Text>
            <Text style={styles.playerCount}>{playerCountText}</Text>
            <Text style={styles.matchStatus}>{statusText}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.rightPart}>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateTime}>27. ožu</Text>
          <Text style={styles.separator}>|</Text>
          <Text style={styles.dateTime}>17:30</Text>
        </View>
        <Pressable
          style={styles.joinButton}
          onPress={() => navigation.navigate(LOBBY, { match })}
        >
          <Text style={styles.joinButtonText}>pridruži se</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  leftPart: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 15,
  },
  sportImage: {
    resizeMode: 'stretch',
    flex: 3,
  },
  sportText: {
    fontSize: 24,
    color: WHITE_0,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
  },
  playerCount: {
    fontSize: 18,
    color: GRAY_MAIN,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
  },
  matchStatus: {
    color: YELLOW_WARNING,
    fontSize: 12,
    marginTop: 10,
  },
  rightPart: {
    flex: 2,
    backgroundColor: SECONDARY_BACKGROUND,
    paddingTop: 10,
    paddingBottom: 12,
    paddingRight: 10,
  },
  dateTimeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dateTime: {
    color: WHITE_0,
    fontSize: 20,
    fontWeight: '600',
  },
  joinButton: {
    backgroundColor: GREEN_MAIN,
    padding: 7,
    borderRadius: 5,
  },
  joinButtonText: {
    textTransform: 'uppercase',
    color: WHITE_0,
    fontWeight: '500',
    fontSize: 13,
    textAlign: 'center',
  },
  separator: {
    color: WHITE_1,
    fontWeight: '700',
    fontSize: 20,
  },
});
