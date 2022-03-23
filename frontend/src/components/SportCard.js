import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const SportCard = ({ imageSrc, text, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <ImageBackground source={imageSrc} style={styles.image}>
        <View style={styles.darken}>
          <Text style={styles.text}>{text.toUpperCase()}</Text>
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
