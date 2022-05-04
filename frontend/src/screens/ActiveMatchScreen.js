import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { getImage, getName } from '../utils/getBasedOnSport';
import {
  MAIN_BACKGROUND,
  GRAY_MAIN,
  WHITE_1,
  BLUE_GLASS,
  RED_MAIN,
} from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import { HOME } from '../constants/routeNames';

const ActiveMatchScreen = ({ route, navigation }) => {
  const { sport, playerCountText, statusText } = route.params.match;
  const [teamOnePoints, setTeamOnePoints] = useState(0);
  const [teamTwoPoints, setTeamTwoPoints] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.matchInfoOuter}>
        <ImageBackground source={getImage(sport)} style={styles.sportImage}>
          <LinearGradient
            colors={['rgba(0,0,0,0.5)', MAIN_BACKGROUND]}
            start={[0.5, 0.25]}
            end={[0.5, 0.95]}
          >
            <View style={styles.matchInfo}>
              <Text
                style={{
                  fontSize: moderateScale(30),
                  color: WHITE_1,
                  fontFamily: 'OpenSans-Semibold',
                }}
              >
                {getName(sport)}
              </Text>
              <Text
                style={{
                  fontFamily: 'OpenSans-Bold',
                  color: GRAY_MAIN,
                  fontSize: moderateScale(20),
                }}
              >
                {playerCountText}
              </Text>
              <Text
                style={{
                  color: GRAY_MAIN,
                  fontSize: moderateScale(15),
                  marginTop: 10,
                }}
              >
                RANGIRANO
              </Text>
              <Text
                style={{
                  color: WHITE_1,
                }}
              >
                15. 5. 2022. - 17:30
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            flex: 1,
            width: '100%',
            height: '80%',
          }}
        >
          <View style={styles.textWrap}>
            <Text style={styles.text}>Crveni</Text>
            <Text style={styles.pointsText}>{teamOnePoints}</Text>
            <Pressable onPress={() => setTeamOnePoints(teamOnePoints + 1)}>
              <View style={styles.button}>
                <Text
                  style={{
                    color: WHITE_1,
                    fontFamily: 'OpenSans-Medium',
                    fontSize: moderateScale(16),
                  }}
                >
                  DODAJ BOD
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.text}>Plavi</Text>
            <Text style={styles.pointsText}>{teamTwoPoints}</Text>
            <Pressable onPress={() => setTeamTwoPoints(teamTwoPoints + 1)}>
              <View style={styles.button}>
                <Text
                  style={{
                    color: WHITE_1,
                    fontFamily: 'OpenSans-Medium',
                    fontSize: moderateScale(16),
                  }}
                >
                  DODAJ BOD
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <Pressable onPress={() => navigation.popToTop()}>
          <View
            style={{
              ...styles.button,
              width: moderateScale(240),
              height: moderateScale(50),
              backgroundColor: RED_MAIN,
            }}
          >
            <Text style={styles.gameText}>ZAVRŠI IGRU</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default ActiveMatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND,
  },
  matchInfoOuter: {
    flex: 10,
  },
  matchInfo: {
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    alignItems: 'center',
  },
  main: {
    padding: '5%',
    flex: 17,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: WHITE_1,
    fontSize: moderateScale(32),
  },
  pointsText: {
    fontFamily: 'OpenSans-Bold',
    color: GRAY_MAIN,
    fontSize: moderateScale(60),
  },
  textWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: BLUE_GLASS,
    borderRadius: moderateScale(8),
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: moderateScale(120),
    height: moderateScale(40),
  },
  gameText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: moderateScale(20),
    color: WHITE_1,
  },
});
