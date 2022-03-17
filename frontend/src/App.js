import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import AppNavigator from './navigation/AppNavigator';
import auth from './store/reducers/auth';

const rootReducer = combineReducers({
  auth: auth,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
