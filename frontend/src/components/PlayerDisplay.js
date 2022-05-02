import React from 'react';
import { View, Text } from 'react-native';

const PlayerDisplay = ({ name }) => {
  return (
    <View>
      <Text>Player display for: {name}</Text>
    </View>
  );
};

export default PlayerDisplay;
