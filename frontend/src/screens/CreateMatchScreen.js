import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { LOBBY } from '../constants/routeNames';
import { SECONDARY_BACKGROUND } from '../constants/colors';

import NavButton from '../components/NavButton';
import { MAIN_BACKGROUND } from '../constants/colors';
import Dropdown from '../components/Dropdown';

const CreateMatchScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}></View>
      <View style={styles.botView}>
        <View style={{ ...styles.main, zIndex: 1500 }}>
          <Dropdown text="Sport" />
        </View>
        <View style={{ ...styles.main, zIndex: 1400 }}>
          <Dropdown text="Vrsta igre" />
        </View>
        <View style={{ ...styles.main, zIndex: 1300 }}>
          <Dropdown text="Udaljenost" />
        </View>
        <View style={{ ...styles.main, zIndex: 1200 }}>
          <Dropdown text="Vrijeme" />
        </View>
        <View style={{ ...styles.main, zIndex: 1100 }}>
          <Dropdown text="Rangirano" />
        </View>
        <NavButton
          name="Create"
          navigate={() => props.navigation.navigate(LOBBY)}
        />
      </View>
    </View>
  );
};

export default CreateMatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_BACKGROUND,
  },
  topView: {
    flex: 1,
  },
  botView: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  main: {
    width: '85%',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomColor: SECONDARY_BACKGROUND,
    borderBottomWidth: 2,
    zIndex: 1000,
  },
});
