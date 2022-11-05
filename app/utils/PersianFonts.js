import React, {useEffect} from 'react';
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const PersianFonts = () => {
    const [fontsLoaded] = useFonts({
        'byekan': require('./app/assets/fonts/byekan.ttf'),
        'ih': require('./app/assets/fonts/ih.ttf'),
    });

    useEffect(() => {
        const loadFarsiFonts = async () => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }
        loadFarsiFonts();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    };
};

export default PersianFonts;
