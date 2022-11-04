import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const CustomTextInput = ({ iconName, iconColor, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...otherProps} />
        <MaterialCommunityIcons
            name={iconName}
            size={24}
            color={iconColor}
            />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '90%',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 15,
        padding: 10,
        marginVertical: 5
    },
    textInput: {
        flex: 1,
        textAlign: "center",
    },
});

export default CustomTextInput;
