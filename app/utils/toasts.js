import React from 'react';
import {useToast} from "react-native-toast-notifications";
import {RFPercentage} from "react-native-responsive-fontsize";

const toast = useToast();

export const loadingToast = (message) => {
    let id = toast.show(message, {
        animationType: 'zoom-in',
        animationDuration: 1000,
        duration: 120000,
        placement: "center",
        type: "normal",
        textStyle: {
            fontFamily: 'byekan',
            fontSize: RFPercentage(1.5),
        },
    });
};

export const successToast = (message) => {
    let id = toast.show(message, {
        animationType: 'slide-in',
        animationDuration: 500,
        placement: "center",
        type: "success",
        textStyle: {
            fontFamily: 'byekan',
            fontSize: RFPercentage(1.5),
        },
    });
};

export const warningToast = (message) => {
    let id = toast.show(message, {
        animationType: 'slide-in',
        animationDuration: 500,
        placement: "center",
        type: "warning",
        textStyle: {
            fontFamily: 'byekan',
            fontSize: RFPercentage(1.5),
        },
    });
};

export const normalToast = (message) => {
    let id = toast.show(message, {
        animationType: 'slide-in',
        animationDuration: 500,
        placement: "center",
        type: "normal",
        textStyle: {
            fontFamily: 'byekan',
            fontSize: RFPercentage(1.5),
        },
    });
};
