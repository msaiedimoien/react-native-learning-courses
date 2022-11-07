import React from 'react'
import {Alert} from "react-native";

const CustomAlert = ({typeAlert, title, message, onPressYesOK}) => {

    const [buttons] = (typeAlert=='yesNo') ?
        [
            {
                text:'منصرف شدم',
                onPress: () => {},
                style: "cancel"
            },
            {
                text: 'اره مطمینم',
                onPress: onPressYesOK
            },
        ] :
        [
            {
                text: 'باشه',
                onPress: onPressYesOK
            }
        ];

    return (
        Alert.alert(
            `${title}`,
            `${message}`,
            [buttons],
            {cancelable: false}
        )
    );
}

export default CustomAlert;