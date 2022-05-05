import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthButton from '../../components/AuthButton';
import AuthInput from '../../components/AuthInput';
import { MAIN_NAV, REGISTER } from '../../constants/routeNames';
import { styles } from './styles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginButton = async () => {
    const body = JSON.stringify({ username, password });

    try {
      const response = await fetch('http://10.0.2.2:8000/api-auth/login/', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      });
      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        console.log('REQ NOT OKAY: ', response.status);
      } else {
        navigation.replace(MAIN_NAV);

        console.log(data.token);
      }
    } catch (error) {
      console.error('LOGIN FETCH CRASHED: ', error);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.keyboardAwareView}
      keyboardShouldPersistTaps={true}
    >
      <View style={styles.container}>
        <Text style={styles.screenName}>LoginScreen</Text>
        <AuthInput
          placeholder="Username"
          lable="Username"
          value={username}
          onChangeText={setUsername}
        />
        <AuthInput
          placeholder="Password"
          lable="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{ marginTop: 20 }}
        />
        <View style={styles.navigtaionButtons}>
          <AuthButton
            text="PRIJAVI SE"
            style={styles.authButton}
            onPress={handleLoginButton}
          />
          <Text style={[styles.underAuthButtonText, styles.line1]}>
            Ako nemate račun,
          </Text>

          <Pressable onPress={() => navigation.replace(REGISTER)}>
            <Text style={[styles.underAuthButtonText, styles.line2]}>
              registrirajte se.
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
