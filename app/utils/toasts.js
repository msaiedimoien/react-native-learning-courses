import React from 'react';
import {useToast} from "react-native-toast-notifications";
import {RFPercentage} from "react-native-responsive-fontsize";

const customToasts = ({ type, message }) => {
    const toast = useToast();

    switch (type) {
        case 'loading':
            let id1 = toast.show(message, {
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
            break;
        case 'success':
            let id2 = toast.show(message, {
                animationType: 'slide-in',
                animationDuration: 500,
                placement: "center",
                type: "success",
                textStyle: {
                    fontFamily: 'byekan',
                    fontSize: RFPercentage(1.5),
                },
            });
            break;
        case 'warning':
            let id3 = toast.show(message, {
                animationType: 'slide-in',
                animationDuration: 500,
                placement: "center",
                type: "warning",
                textStyle: {
                    fontFamily: 'byekan',
                    fontSize: RFPercentage(1.5),
                },
            });
            break;
        case 'normal':
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
    }

    const loadingToast = (message) => {
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

    const customToast = (message) => {
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

    const warningToast = (message) => {
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

    const normalToast = (message) => {
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
};

export default customToasts;


