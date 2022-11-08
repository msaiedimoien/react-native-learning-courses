import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { I18nManager } from "react-native";
import StackNavigator from "./app/navigators/StackNavigator";
import { ToastProvider } from 'react-native-toast-notifications'
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
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

    return(
        <ToastProvider>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </ToastProvider>
    )
};

export default App;