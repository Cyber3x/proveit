import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { BLUE_GLASS, WHITE_0, WHITE_1 } from '../constants/colors';

const Dropdown = ({ open, value, items, setOpen, setValue, setItems }) => {
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        textStyle={styles.text}
        placeholder="Odaberite..."
        listItemContainerStyle={styles.dropdownItem}
        dropDownContainerStyle={{
          borderWidth: 0,
        }}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {},
  dropdown: {
    backgroundColor: BLUE_GLASS,
    borderWidth: 0,
    color: WHITE_0,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: WHITE_1,
    fontSize: 16,
  },
});
