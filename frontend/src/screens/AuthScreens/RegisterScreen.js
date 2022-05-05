import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthButton from '../../components/AuthButton';
import AuthInput from '../../components/AuthInput';
import { LOGIN, MAIN_NAV } from '../../constants/routeNames';
import { useStore } from '../../store/globalStore';
import { styles } from './styles';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassowrd, setConfirmPassowrd] = useState('');

  const setCurrentUser = useStore(state => state.setCurrentSport);

  const handleRegisterButton = async () => {
    const body = JSON.stringify({ email, username, password });

    try {
      const response = await fetch('http://10.0.2.2:8000/api-auth/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      });
      const data = await response.json();
      if (!response.ok) {
        console.log('REQ NOT OKAY: ', response.status);
      } else {
        navigation.replace(MAIN_NAV);

        const { user: userData, token } = data;
        const user = { ...userData, token };
        console.log(user);
        setCurrentUser(user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.keyboardAwareView}
      extraHeight={20}
      enableAutomaticScroll
      keyboardShouldPersistTaps={true}
    >
      <View style={styles.container}>
        <Text style={styles.screenName}>Registracija</Text>
        <AuthInput
          placeholder="Email"
          lable="Email"
          autoComplete="email"
          value={email}
          onChangeText={setEmail}
        />
        <AuthInput
          placeholder="Korisničko ime"
          lable="Korisničko ime"
          onChangeText={setUsername}
          value={username}
          style={styles.authInput}
        />
        <AuthInput
          placeholder="Lozinka"
          lable="Lozinka"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.authInput}
        />
        <AuthInput
          placeholder="Lozinka ponovno"
          lable="Lozinka ponovno"
          secureTextEntry
          value={confirmPassowrd}
          onChangeText={setConfirmPassowrd}
          style={styles.authInput}
        />

        <View style={styles.navigtaionButtons}>
          <AuthButton
            text="REGISTRIRAJ SE"
            style={styles.authButton}
            onPress={handleRegisterButton}
          />
          <Text style={[styles.underAuthButtonText, styles.line1]}>
            Ako već imate račun,
          </Text>
          <Pressable onPress={() => navigation.replace(LOGIN)}>
            <Text style={[styles.underAuthButtonText, styles.line2]}>
              prijavite se.
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
