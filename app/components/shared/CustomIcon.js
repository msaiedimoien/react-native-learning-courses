import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const CustomIcon = ({ name, size=24, color, style, onPress }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={[ style,{
        width: size, height: size,
        borderWidth: 1, borderColor: color, borderRadius: size/2,
        justifyContent: 'center', alignItems: 'center'
    }]}>
        <MaterialCommunityIcons name={name} color={color} size={size * 0.7} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomIcon;
