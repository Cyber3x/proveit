import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { getImage, getName } from '../utils/getBasedOnSport';

const SportCard = ({ sport, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <ImageBackground source={getImage(sport)} style={styles.image}>
        <View style={styles.darken}>
          <Text style={styles.text}>{getName(sport).toUpperCase()}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default SportCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 4,
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: '#f5f5f5',
    fontWeight: '400',
    fontSize: 20,
  },
  darken: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
