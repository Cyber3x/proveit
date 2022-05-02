import { StyleSheet, View, Text, Pressable, Switch } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SECONDARY_BACKGROUND, WHITE_1 } from '../constants/colors';
import DropDownPicker from 'react-native-dropdown-picker';

import ActionButton from '../components/ActionButton';
import { MAIN_BACKGROUND } from '../constants/colors';
import {
  basketballTypes,
  footballTypes,
  handballTypes,
  sportsDropdown,
  tenisTypes,
  volleyballTypes,
  distanceDropdown,
} from '../data/DropdownValues';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { moderateScale } from 'react-native-size-matters';
import { GREEN_MAIN, RED_MAIN } from '../constants/colors';

/*
  // State for sports dropdown
  const [sports, setSports] = useState([
    { label: 'Košarka', value: 'basketball' },
    { label: 'Nogomet', value: 'football' },
    { label: 'Tenis', value: 'tenis' },
    { label: 'Odbojka', value: 'volleyball' },
    { label: 'Rukomet', value: 'handball' },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [sportValue, setSportValue] = useState(null);

*/

const CreateMatchScreen = props => {
  // State for sports dropdown
  const [sports, setSports] = useState(sportsDropdown);
  const [sportOpen, setSportOpen] = useState(false);
  const [sportValue, setSportValue] = useState(null);

  // Choose sport dropdown based on sport selected
  const gt = [
    {
      label: 'Odaberite sport',
      value: null,
    },
  ];

  useEffect(() => {
    switch (sportValue) {
      case 'basketball':
        setGameType(basketballTypes);
        break;
      case 'football':
        setGameType(footballTypes);
        break;
      case 'tenis':
        setGameType(tenisTypes);
        break;
      case 'volleyball':
        setGameType(volleyballTypes);
        break;
      case 'handball':
        setGameType(handballTypes);
        break;
      default:
        break;
    }
  }, [sportValue]);

  // State for sports dropdown
  const [gameType, setGameType] = useState(gt);
  const [gameTypeOpen, setGameTypeOpen] = useState(false);
  const [gameTypeValue, setGameTypeValue] = useState(null);

  // State for distance
  const [distance, setDistance] = useState(distanceDropdown);
  const [distanceOpen, setDistanceOpen] = useState(false);
  const [distanceValue, setDistanceValue] = useState(null);

  // State for ranked
  const [ranked, setRanked] = useState(false);

  const [num, setNum] = useState(0);
  const [date, setDate] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleDatetime = date => {
    setDatePickerVisibility(false);
    setNum(num + 100);
    setDate(date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}></View>
      <View style={styles.botView}>
        <View style={{ ...styles.main, zIndex: 1500 }}>
          {/* Dropwdown for sports */}
          <View style={styles.toplevel}>
            <Text style={styles.text}>Sport</Text>

            <View style={styles.container2}>
              <DropDownPicker
                open={sportOpen}
                value={sportValue}
                items={sports}
                setOpen={setSportOpen}
                setValue={setSportValue}
                setItems={setSports}
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
          {/* End dropdown for sports */}
        </View>
        <View style={{ ...styles.main, zIndex: 1400 }}>
          {/* Dropwdown for game type */}
          <View style={styles.toplevel}>
            <Text style={styles.text}>Vrsta igre</Text>

            <View style={styles.container2}>
              <DropDownPicker
                open={gameTypeOpen}
                value={gameTypeValue}
                items={gameType}
                setOpen={setGameTypeOpen}
                setValue={setGameTypeValue}
                setItems={setGameType}
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
          {/* End dropdown for game type */}
        </View>
        <View style={{ ...styles.main, zIndex: 1300 }}>
          {/* Dropwdown for distance */}
          <View style={styles.toplevel}>
            <Text style={styles.text}>Udaljenost</Text>

            <View style={styles.container2}>
              <DropDownPicker
                open={distanceOpen}
                value={distanceValue}
                items={distance}
                setOpen={setDistanceOpen}
                setValue={setDistanceValue}
                setItems={setDistance}
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
          {/* End dropdown for distance */}
        </View>
        <View style={{ ...styles.main, zIndex: 1200 }}>
          {/* Picker for datetime */}
          <View style={styles.toplevel}>
            <Text style={styles.text}>Datum / Vrijeme</Text>

            <View style={styles.container2}>
              <Pressable onPress={() => setDatePickerVisibility(true)}>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="datetime"
                  onConfirm={date => handleDatetime(date)}
                  onCancel={() => setDatePickerVisibility(false)}
                  isDarkModeEnabled={true}
                />
                <View style={styles.datetime}>
                  <Text
                    style={{ ...styles.text, fontFamily: 'OpenSans-Medium' }}
                  >
                    {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}.
                    | {date.getHours()}:{date.getMinutes()}
                  </Text>
                  <FontAwesome name="calendar" color="white" size={20} />
                </View>
              </Pressable>
            </View>
          </View>
          {/* End picker for datetime */}
        </View>
        <View
          style={{
            ...styles.main,
            zIndex: 1100,
            flexDirection: 'row',
          }}
        >
          <View style={{ flex: 45 }}>
            <Text style={styles.text}>Rangirano</Text>
          </View>
          <View
            style={{
              flex: 55,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Switch
              style={styles.switch}
              trackColor={{ false: RED_MAIN, true: GREEN_MAIN }}
              thumbColor={'#375E75'}
              onValueChange={() => setRanked(!ranked)}
              value={ranked}
            />
            <Text style={styles.text}>{ranked ? 'Da' : 'Ne'}</Text>
          </View>
        </View>
        <ActionButton name="Kreiraj" />
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
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(5),
    borderBottomColor: SECONDARY_BACKGROUND,
    borderBottomWidth: 2,
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: '#375E75',
    borderWidth: 0,
    height: moderateScale(40),
  },
  dropdownItem: {
    backgroundColor: '#375E75',
    borderWidth: 0,
    borderTopColor: SECONDARY_BACKGROUND,
    borderTopWidth: 1,
  },
  container2: {
    width: '55%',
  },
  toplevel: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: WHITE_1,
    fontSize: moderateScale(15),
    fontFamily: 'OpenSans-Bold',
  },
  datetime: {
    backgroundColor: '#375E75',
    borderWidth: 0,
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  switch: {
    transform: [
      { scaleX: moderateScale(1.33) },
      { scaleY: moderateScale(1.33) },
    ],
    marginHorizontal: moderateScale(20),
  },
});
