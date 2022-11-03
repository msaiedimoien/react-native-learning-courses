import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Text} from 'react-native';
import {CustomButton} from "../components/CustomButton";

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground style={styles.background} blurRadius={3} source={require('../assets/bg4.jpg')}>
            <View style={styles.firstContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.firstText}>مهارت آموزی آنلاین را با ما تجربه کنید❤</Text>
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
        fontSize: 20,
        fontFamily: 'ih'
    }
});

export default WelcomeScreen;