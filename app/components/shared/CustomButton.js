import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import CustomText from "./CustomText";

export const CustomButton = ({ title, onPress, color = "tomato" }) => {
    return(
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
            <CustomText fontFamily='byekan' size={2.2} styles={styles.text}>{title}</CustomText>
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
        color: 'white',
    },
});
