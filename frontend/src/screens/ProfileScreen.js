import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import {
  APP_NAV,
  AUTH_NAV,
  EDIT_PROFILE,
  SCHEDULED,
} from '../constants/routeNames';

import { setLogin } from '../store/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { BLUE_GLASS, MAIN_BACKGROUND } from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import { WHITE_0, RED_MAIN } from '../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileTextTab from '../components/ProfileTextTab';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [imgUrl, setImgUrl] = useState('');

  let profile = useSelector(state => state.profile);

  const handleLogout = () => {
    dispatch(setLogin(false));
    props.navigation.navigate(APP_NAV);
    navigation.reset({
      index: 0,
      routes: [{ name: AUTH_NAV }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Pressable style={{ alignItems: 'center' }} onPress={() => pickImage()}>
          <Image
            source={require('../assets/images/default-profile.jpg')}
            style={styles.image}
          />
        </Pressable>
        <View style={styles.nameView}>
          <Text style={styles.textName}>User Ime {'\n'}User Prezime</Text>
          <View>
            <Pressable onPress={() => handleLogout()} style={styles.pressable}>
              <Text
                style={{
                  ...styles.text,
                  color: RED_MAIN,
                  marginHorizontal: moderateScale(7),
                }}
              >
                Odjava
              </Text>
              <MaterialIcons
                name="logout"
                size={moderateScale(20)}
                color={RED_MAIN}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.midView}>
        <View style={styles.wrapper}>
          <ProfileTextTab textLeft="Rank" textRight="Gold 3" />
          <ProfileTextTab textLeft="Odigrano" textRight="37" />
          <ProfileTextTab textLeft="Pobjeđeno" textRight="23" />
        </View>
        <View style={styles.wrapper}>
          <ProfileTextTab textLeft="Mail" textRight={profile.email} />
          <ProfileTextTab textLeft="Rođen" textRight={profile.dob} />
          <ProfileTextTab textLeft="Spol" textRight={profile.gender} />
          <ProfileTextTab
            textLeft="Najdraži sport"
            textRight={profile.favSport}
          />
        </View>
      </View>
      <View style={styles.botView}>
        <Pressable
          style={styles.buttonWrapper}
          onPress={() => props.navigation.navigate(EDIT_PROFILE)}
        >
          <Text style={styles.text}>Uredi</Text>
          <FontAwesome name="edit" size={moderateScale(18)} color={WHITE_0} />
        </Pressable>
        <Pressable
          style={styles.buttonWrapper}
          onPress={() => props.navigation.navigate(SCHEDULED)}
        >
          <Text style={styles.text}>Zakazano</Text>
          <FontAwesome
            name="calendar-plus-o"
            size={moderateScale(18)}
            color={WHITE_0}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_BACKGROUND,
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100),
  },
  topView: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: moderateScale(10),
  },
  midView: {
    flex: 3,
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  botView: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: moderateScale(10),
  },
  textName: {
    fontSize: moderateScale(18),
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    color: WHITE_0,
  },
  nameView: {},
  text: {
    fontFamily: 'OpenSans-Medium',
    color: WHITE_0,
    fontSize: moderateScale(16),
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(15),
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: BLUE_GLASS,
    width: '85%',
    height: '42%',
    borderRadius: moderateScale(8),
    elevation: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '40%',
    height: '30%',
    backgroundColor: BLUE_GLASS,
    borderRadius: moderateScale(8),
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
