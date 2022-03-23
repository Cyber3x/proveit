import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { SECONDARY_BACKGROUND, WHITE_1 } from '../constants/colors';
import { useState } from 'react';

const Dropdown = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.text}</Text>

      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropdown}
          textStyle={{ ...styles.text, fontFamily: 'OpenSans-Medium' }}
          placeholder="Odaberite..."
          listItemContainerStyle={styles.dropdownItem}
          dropDownContainerStyle={{
            borderWidth: 0,
          }}
        />
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#375E75',
    borderWidth: 0,
    height: 40,
  },
  dropdownItem: {
    backgroundColor: '#375E75',
    borderWidth: 0,
    borderTopColor: SECONDARY_BACKGROUND,
    borderTopWidth: 1,
  },
  container: {
    width: '60%',
  },
  toplevel: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: WHITE_1,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  rectangle: {},
});
