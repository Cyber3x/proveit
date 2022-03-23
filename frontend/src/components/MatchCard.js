import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import tennisImage from '../assets/tenis.jpg';
import { SECONDARY_BACKGROUND, WHITE_0 } from '../constants/colors';

const MatchCard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={tennisImage} style={styles.sportImage}>
        <LinearGradient
          colors={['transparent', SECONDARY_BACKGROUND]}
          start={[0, 0.5]}
          end={[0.8, 0.5]}
        >
          <Text style={styles.text}>Tenis</Text>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.rightPart}>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateTime}>27. ožu</Text>
          <Text style={styles.separator}>|</Text>
          <Text style={styles.dateTime}>17:30</Text>
        </View>
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
  },
  sportImage: {
    resizeMode: 'stretch',
    flex: 3,
  },
  text: {
    padding: 30,
  },
  textView: {
    backgroundColor: '',
  },
  rightPart: {
    flex: 2,
    backgroundColor: SECONDARY_BACKGROUND,
  },
  dateTimeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dateTime: {
    color: WHITE_0,
  },
  separator: {
    color: WHITE_0,
    fontWeight: '700',
  },
});
