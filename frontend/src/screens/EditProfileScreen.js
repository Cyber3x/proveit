import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { APP_NAV, AUTH_NAV, PROFILE } from '../constants/routeNames';

import { setLogin } from '../store/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { BLUE_GLASS, GREEN_MAIN, MAIN_BACKGROUND } from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import { WHITE_0, RED_MAIN } from '../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileTextTab from '../components/ProfileTextTab';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

const EditProfileScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
        <View>
          <Image
            source={require('../assets/images/default-profile.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.textName}>User Ime {'\n'}User Prezime</Text>
          <View>
            <Pressable
              onPress={() => console.log(profile.email)}
              style={styles.pressable}
            >
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
        <View style={styles.wrapper}></View>
      </View>
      <View style={styles.botView}>
        <Pressable
          style={{ ...styles.buttonWrapper, backgroundColor: GREEN_MAIN }}
          onPress={() => props.navigation.navigate(PROFILE)}
        >
          <Text style={styles.text}>Spremi</Text>
          <FontAwesome name="save" size={moderateScale(18)} color={WHITE_0} />
        </Pressable>
        <View style={styles.buttonWrapper}>
          <Text style={styles.text}>Zakazano</Text>
          <FontAwesome
            name="calendar-plus-o"
            size={moderateScale(18)}
            color={WHITE_0}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;

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
