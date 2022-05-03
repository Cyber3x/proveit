import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import AppNavigator from './navigation/AppNavigator';
import auth from './store/reducers/auth';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import profile from './store/reducers/profile';

const rootReducer = combineReducers({
  auth: auth,
  profile: profile,
});

const store = createStore(rootReducer);

const App = () => {
  let [fontsLoaded] = useFonts({
    'OpenSans-Medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
