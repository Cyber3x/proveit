import React from 'react';
import { StyleSheet, View } from 'react-native';
import MatchCard from '../components/MatchCard';
import { MAIN_BACKGROUND } from '../constants/colors';

const ViewMatchesScreen = props => {
  return (
    <View style={styles.container}>
      <MatchCard />
    </View>
  );
};

export default ViewMatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND,
    padding: 15,
  },
});
