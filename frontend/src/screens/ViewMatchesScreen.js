import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MatchCard from '../components/MatchCard';
import { MAIN_BACKGROUND } from '../constants/colors';
import {
  BASKETBALL,
  FOOTBALL,
  HANDBALL,
  TENIS,
  VOLLEYBALL,
} from '../constants/sports';

// TODO connect data to matches, remove mock data
const matches = [
  {
    sport: FOOTBALL,
    playerCountText: '3v3',
    statusText: 'Na čekanju',
  },
  {
    sport: VOLLEYBALL,
    playerCountText: '2v2',
    statusText: 'Čekaju se igrači',
  },
  {
    sport: BASKETBALL,
    playerCountText: '5v5',
    statusText: 'Na čekanju',
  },
  {
    sport: FOOTBALL,
    playerCountText: '3v3',
    statusText: 'Na čekanju',
  },
  {
    sport: TENIS,
    playerCountText: '3v3',
    statusText: 'Na čekanju',
  },
  {
    sport: HANDBALL,
    playerCountText: '3v3',
    statusText: 'Na čekanju',
  },
  {
    sport: TENIS,
    playerCountText: '3v3',
    statusText: 'Na čekanju',
  },
  {
    sport: VOLLEYBALL,
    playerCountText: '3v3',
    statusText: 'Na čekanju',
  },
];

const ViewMatchesScreen = props => {
  useEffect(() => {
    fetch('http://10.0.2.2/api/match/', {
      method: 'GET',
    })
      // .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('[ERROR WHILE FETCHIND MATHCES]', error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        {matches.map((match, i) => (
          <MatchCard
            key={i}
            sport={match.sport}
            matchPlayerCountText={match.playerCountText}
            matchStatusText={match.statusText}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ViewMatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND,
  },
  scrollView: {
    padding: 15,
  },
});
