import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Switch,
  Image,
  PermissionsAndroid,
} from 'react-native';
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
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

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

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [markLatitude, setMarkLatitude] = useState(0);
  const [markLongitude, setMarkLongitude] = useState(0);

  // Choose sport dropdown based on sport selected
  const gt = [
    {
      label: 'Odaberite sport',
      value: null,
    },
  ];

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

        {
          title: 'Location Access Required',

          message: 'This App needs to Access your location',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        getLocation();
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  /*,
      {
        enableHighAccuracy: false,

        timeout: 30000,

        maximumAge: 1000,
      }, */

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setMarkLatitude(position.coords.latitude);
        setMarkLongitude(position.coords.longitude);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

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

  const handleRegionChange = reg => {
    setMarkLatitude(reg.latitude);
    setMarkLongitude(reg.longitude);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <MapView
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.09,
          }}
          style={{
            width: '100%',
            height: '90%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Marker
            draggable
            coordinate={{ latitude: markLatitude, longitude: markLongitude }}
            onDragEnd={e => {
              handleRegionChange(e.nativeEvent.coordinate);
            }}
          ></Marker>
        </MapView>
      </View>
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
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  mapimage: {
    // width: '100%',
    flex: 1,
    marginVertical: 20,
    width: '100%',
    borderRadius: 7.5,
  },
});
