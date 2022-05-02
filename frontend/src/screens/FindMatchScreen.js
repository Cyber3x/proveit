import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterDropdown from '../components/FilterDropdown';
import NavButton from '../components/NavButton';
import { BLUE_GLASS, MAIN_BACKGROUND, WHITE_0 } from '../constants/colors';
import { CREATE_MATCH, VIEW_MATCHES } from '../constants/routeNames';
import { SCREEN_PADDING } from '../constants/sizes';
import { sportsDropdown } from '../data/DropdownValues';

const FindMatchScreen = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(sportsDropdown);

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', color: WHITE_0, fontSize: 20 }}>
        FindMatchScreen
      </Text>
      <View style={styles.optionRow}>
        <Text style={styles.lable}>Sport</Text>
        <FilterDropdown
          items={sportsDropdown}
          value={value}
          open={open}
          setOpen={setOpen}
          setValue={setValue}
        />
      </View>
      <NavButton
        name="Create match"
        navigate={() => props.navigation.navigate(CREATE_MATCH)}
      />
      <NavButton
        name="View matches"
        navigate={() => props.navigation.navigate(VIEW_MATCHES)}
      />
    </View>
  );
};

export default FindMatchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_BACKGROUND,
    flex: 1,
    padding: SCREEN_PADDING,
  },
  lable: {
    color: WHITE_0,
    fontSize: 16,
    textAlignVertical: 'center',
  },
  optionRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 100,
  },
});
