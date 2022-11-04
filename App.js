import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { I18nManager } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import TabsNavigator from "./app/containers/TabsNavigator";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

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
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='Welcome' component={WelcomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
                <Stack.Screen name='Home' component={TabsNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;