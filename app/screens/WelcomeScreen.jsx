import React, { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { StackActions, useNavigationState } from "@react-navigation/native";
import {
    Alert,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    BackHandler,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/actions";
import CustomAlert from "../components/shared/CustomAlert";
import CustomText from "../components/shared/CustomText";
import {CustomButton} from "../components/shared/CustomButton";
import {decodeToken} from "../utils/jwt";

const WelcomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const screenIndex = useNavigationState((state) => state.index);

    useEffect(() => {
        let currentCount = 0;

        if (screenIndex <= 0) {
            BackHandler.addEventListener("hardwareBackPress", () => {
                if (currentCount === 1) {
                    BackHandler.exitApp();
                    return true;
                }

                currentCount += 1;

                setTimeout(() => {
                    currentCount = 0;
                }, 1000);

                return true;
            });
        }
    }, []);

    useEffect(() => {
        const internetChecking = async () => {
            const state = await NetInfo.fetch();
            if (!state.isConnected) {
                CustomAlert({
                    typeAlert: 'OK',
                    title: 'اتصال به سرور',
                    message: 'برای استفاده از اپلیکیشن باید به اینترنت متصل باشید.',
                    onPressYesOK: BackHandler.exitApp
                });
            }
            else {
                const token = await AsyncStorage.getItem("token");
                const userId = JSON.parse(await AsyncStorage.getItem("userId"));

                if (token !== null && userId !== null) {
                    const decodedToken = decodeToken(token);

                    dispatch(userAction(decodedToken.user));

                    if (decodedToken.user.userId === userId)
                        navigation.dispatch(StackActions.replace('Home'));
                    else {
                        await AsyncStorage.removeItem("token");
                        await AsyncStorage.removeItem("userId");
                        navigation.navigate("Login");
                    }
                }
            }
        };
        internetChecking();
    }, []);

    return (
        <ImageBackground style={styles.background} blurRadius={3} source={require('../assets/bg4.jpg')}>
            <View style={styles.firstContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <CustomText fontFamily='ih' size={2.5} styles={styles.firstText}>مهارت آموزی آنلاین را با ما تجربه کنید❤</CustomText>
            </View>
            <CustomButton title="ورود" onPress={() => navigation.navigate('Login')} color='royalblue'/>
            <CustomButton title="ثبت نام" onPress={() => navigation.navigate('Register')} color='orangered'/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
        padding: 20,
        paddingBottom: 30
    },
    firstContainer: {
        position: 'absolute',
        top: 85,
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 190
    },
    firstText: {
        color: 'white',
        top: 10,
    }
});

export default WelcomeScreen;