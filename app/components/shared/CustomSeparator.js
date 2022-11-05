import React from 'react';
import { View } from 'react-native';

const CustomSeparator = ({height}) => {
  return (
    <View style={{width: '100%', height, backgroundColor: 'darkgray', marginVertical: 20}}/>
  );
};

export default CustomSeparator;
