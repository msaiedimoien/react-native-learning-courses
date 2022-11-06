import React from 'react';
import { Text } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const CustomText = ({ fontFamily, size, styles, children }) => {
  return (
      <Text style={[styles, {fontFamily, fontSize: RFPercentage(size)}]}>{children}</Text>
  );
};

export default CustomText;
