import React, { useState } from 'react';
import { KeyboardAvoidingView, Pressable, Text, View } from 'react-native';
import AuthButton from '../../components/AuthButton';
import AuthInput from '../../components/AuthInput';
import { LOGIN, MAIN_NAV } from '../../constants/routeNames';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';

const RegisterScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassowrd, setConfirmPassowrd] = useState('');

  return (
    <KeyboardAwareScrollView
      style={styles.keyboardAwareView}
      extraHeight={20}
      enableAutomaticScroll
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
            onPress={() => props.navigation.replace(MAIN_NAV)}
          />
          <Text style={[styles.underAuthButtonText, styles.line1]}>
            Ako već imate račun,
          </Text>
          <Pressable onPress={() => props.navigation.replace(LOGIN)}>
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
