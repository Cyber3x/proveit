import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MatchNotFoundScreen = props => {
  return (
    <View style={styles.container}>
      <Text>MatchNotFoundScreen</Text>
    </View>
  );
};

export default MatchNotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
