import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthButton from '../../components/AuthButton';
import AuthInput from '../../components/AuthInput';
import { MAIN_NAV, REGISTER } from '../../constants/routeNames';
import { styles } from './styles';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAwareScrollView style={styles.keyboardAwareView}>
      <View style={styles.container}>
        <Text style={styles.screenName}>LoginScreen</Text>
        <AuthInput
          placeholder="Email"
          lable="Email"
          autoComplete="email"
          value={email}
          onChangeText={setEmail}
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
            onPress={() => props.navigation.replace(MAIN_NAV)}
          />
          <Text style={[styles.underAuthButtonText, styles.line1]}>
            Ako nemate račun,
          </Text>
          <Pressable onPress={() => props.navigation.replace(REGISTER)}>
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
