import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { I18nManager } from "react-native";
import StackNavigator from "./app/navigators/StackNavigator";
import { ToastProvider } from 'react-native-toast-notifications'
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {Provider} from "react-redux";
import {store} from "./app/redux/store";
import AnimatedSplash from "react-native-animated-splash-screen";

SplashScreen.preventAutoHideAsync();

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
    const [loading, setLoading] = useState(false);
    const [fontsLoaded] = useFonts({
        'byekan': require('./app/assets/fonts/byekan.ttf'),
        'ih': require('./app/assets/fonts/ih.ttf'),
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 3000);
    }, []);

    useEffect(() => {
        const loadFarsiFonts = async () => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }
        loadFarsiFonts();
    }, [fontsLoaded]);

    if (!fontsLoaded)
        return null;

    return (
        <AnimatedSplash
            translucent={true}
            isLoaded={loading}
            logoImage={require("./app/assets/logo.png")}
            backgroundColor={"#262626"}
            logoHeight={150}
            logoWidth={150}
        >
            <ToastProvider>
                <NavigationContainer>
                    <Provider store={store}>
                        <StackNavigator/>
                    </Provider>
                </NavigationContainer>
            </ToastProvider>
        </AnimatedSplash>
    )
};

export default App;