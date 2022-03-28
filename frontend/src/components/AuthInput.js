import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {
  BLUE_GLASS,
  GRAY_MAIN,
  SECONDARY_BACKGROUND,
  WHITE_0,
} from '../constants/colors';

const AuthInput = ({
  lable,
  placeholder,
  style,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <View style={[style, styles.container]}>
      <Text style={styles.lable}>{lable}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={GRAY_MAIN}
        autoComplete="email"
        onChangeText={text => onChangeText(text)}
        value={value}
        {...rest}
      />
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  container: {},
  lable: {
    color: BLUE_GLASS,
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 15,
  },
  textInput: {
    fontSize: 16,
    padding: 12,
    paddingHorizontal: 20,
    borderColor: SECONDARY_BACKGROUND,
    borderWidth: 2,
    borderRadius: 10,
    color: WHITE_0,
  },
});
