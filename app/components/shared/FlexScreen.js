import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from "expo-constants";

const FlexScreen = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>{children}</View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        marginTop: Constants.statusBarHeight + 10,
    }
});

export default FlexScreen;
