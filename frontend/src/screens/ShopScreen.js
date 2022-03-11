import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import NavButton from '../components/NavButton';
import {PREMIUM, REGISTER} from '../constants/routeNames';

const ShopScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ShopScreen</Text>
      <NavButton
        name="Premium"
        navigate={() => props.navigation.navigate(PREMIUM)}
      />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
