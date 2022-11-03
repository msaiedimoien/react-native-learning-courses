import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";

export const CustomButton = ({ title, onPress, color = "tomato" }) => {
    return(
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 5,
        borderRadius: 15,
    },
    text: {
        fontFamily: 'byekan',
        color: 'white',
        fontSize: 18
    },
});
