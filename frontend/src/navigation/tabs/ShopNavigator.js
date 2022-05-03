import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PREMIUM, SHOP } from '../../constants/routeNames';
import PremiumScreen from '../../screens/PremiumScreen';
import ShopScreen from '../../screens/ShopScreen';

const ShopNavigator = () => {
  const ShopNav = createStackNavigator();
  return (
    <ShopNav.Navigator
      initialRouteName={SHOP}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <ShopNav.Screen name={SHOP} component={ShopScreen}></ShopNav.Screen>
      <ShopNav.Screen name={PREMIUM} component={PremiumScreen}></ShopNav.Screen>
    </ShopNav.Navigator>
  );
};

export default ShopNavigator;
