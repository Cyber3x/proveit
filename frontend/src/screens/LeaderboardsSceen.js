import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useStore } from '../store/globalStore';

const LeaderboardsSceen = props => {
  const currentSport = useStore(state => state.currentSport);
  return (
    <View style={styles.container}>
      <Text>LeaderboardsSceen</Text>
      <Text>{currentSport}</Text>
      <Text>Im here</Text>
    </View>
  );
};

export default LeaderboardsSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
