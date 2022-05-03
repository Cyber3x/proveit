import React from 'react';
import { StyleSheet, View } from 'react-native';
import SportCard from '../components/SportCard';
import { MAIN_BACKGROUND } from '../constants/colors';
import { FIND_MATCH_NAV, VIEW_MATCHES } from '../constants/routeNames';
import {
  BASKETBALL,
  FOOTBALL,
  HANDBALL,
  TENIS,
  VOLLEYBALL,
} from '../constants/sports';
import { useStore } from '../store/globalStore';

const sports = [BASKETBALL, FOOTBALL, TENIS, VOLLEYBALL, HANDBALL];

// TODO: handle clicking on cards and handle setting state
const HomeScreen = ({ navigation }) => {
  const setCurrentSport = useStore(state => state.setCurrentSport);
  const handleCardPress = sport => {
    navigation.navigate(FIND_MATCH_NAV);
    setCurrentSport(sport);
  };

  return (
    <View style={styles.container}>
      {sports.map((sport, index) => (
        <SportCard
          key={index}
          sport={sport}
          onPress={() => handleCardPress(sport)}
        />
      ))}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 4,
    backgroundColor: MAIN_BACKGROUND,
  },
});
