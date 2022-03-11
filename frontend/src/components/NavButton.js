import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const NavButton = props => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.navigate}>
        <Text style={{fontSize: 20, color: 'whitesmoke'}}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#00b800',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
