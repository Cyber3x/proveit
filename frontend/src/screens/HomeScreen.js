import React from 'react';
import { StyleSheet, View } from 'react-native';
import basketImage from '../assets/basket.jpg';
import SportCard from '../components/SportCard';
import footballImage from '../assets/football.jpg';
import tenisImage from '../assets/tenis.jpg';
import volleyballImage from '../assets/volleyball.jpg';
import handballImage from '../assets/handball.jpg';
import { LEADERBOARDS } from '../constants/routeNames';

import { useStore } from '../store/globalStore';

const sports = [
  {
    imageSrc: basketImage,
    text: 'košarka',
    sportName: 'basketball',
  },
  {
    imageSrc: footballImage,
    text: 'nogomet',
    sportName: 'football',
  },
  {
    imageSrc: tenisImage,
    text: 'tenis',
    sportName: 'tenis',
  },
  {
    imageSrc: volleyballImage,
    text: 'odbojka',
    sportName: 'volleyball',
  },
  {
    imageSrc: handballImage,
    text: 'rukomet',
    sportName: 'handball',
  },
];

// TODO: handle clicking on cards and handle setting state
const HomeScreen = ({ navigation }) => {
  const setCurrentSport = useStore(state => state.setCurrentSport);
  const handleCardPress = sportName => {
    navigation.navigate(LEADERBOARDS);
    setCurrentSport(sportName);
  };

  return (
    <View style={styles.container}>
      {sports.map(({ imageSrc, text, sportName }) => (
        <SportCard
          imageSrc={imageSrc}
          text={text}
          sportName={sportName}
          onPress={() => handleCardPress(sportName)}
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
  },
});
