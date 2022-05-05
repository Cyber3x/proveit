import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';
import ActionButton from '../components/ActionButton';
import PlayerDisplay from '../components/PlayerDisplay';
import {
  GRAY_MAIN,
  MAIN_BACKGROUND,
  RED_MAIN,
  WHITE_1,
} from '../constants/colors';
import { ACTIVE_MATCH, FIND_MATCH } from '../constants/routeNames';
import { getImage, getName } from '../utils/getBasedOnSport';

const LobbyScreen = ({ route, navigation }) => {
  const { sport, playerCountText, statusText } = route.params.match;
  let match = route.params.match;
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
      <View style={styles.playerList}>
        <View style={styles.borderView}>
          <Text
            style={{
              fontFamily: 'OpenSans-Medium',
              fontSize: moderateScale(24),
              color: GRAY_MAIN,
              marginVertical: 5,
            }}
          >
            ČEKAONICA
          </Text>
          <ScrollView
            style={{ width: '100%' }}
            contentContainerStyle={{ alignItems: 'center' }}
          >
            <PlayerDisplay name="Marko Polo" />
            <PlayerDisplay name="Marko yolo" />
          </ScrollView>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <ActionButton
          width={160}
          onPress={() => navigation.replace(FIND_MATCH)}
          name="Napusti sahranu"
          style={{ backgroundColor: RED_MAIN }}
        />
        <ActionButton
          onPress={() => navigation.navigate(ACTIVE_MATCH, { match })}
          width={160}
          name="Pokreni igru"
        ></ActionButton>
      </View>
    </View>
  );
};

export default LobbyScreen;

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
  sportImage: {},
  playerList: {
    padding: '5%',
    flex: 17,
    alignItems: 'center',
    width: '100%',
  },
  actionButtons: {
    padding: '5%',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  borderView: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopColor: 'whitesmoke',
    borderTopWidth: 1,
    alignItems: 'center',
    paddingTop: 8,
  },
});
