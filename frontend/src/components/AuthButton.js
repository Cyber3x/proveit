import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { GREEN_MAIN, WHITE_0 } from '../constants/colors';

const AuthButton = ({ text, style, onPress }) => {
  return (
    <Pressable style={[style, styles.container]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GREEN_MAIN,
    borderRadius: 10,
    padding: 15,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: 'bold',
    color: WHITE_0,
    textTransform: 'uppercase',
  },
});
