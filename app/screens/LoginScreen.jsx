import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Formik } from 'formik';
import Constants from "expo-constants";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {CustomButton} from "../components/CustomButton";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleSubmit }) => (
                <>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput
                            style={styles.textInput}
                            autoCorrect={false}
                            autoComplete='email'
                            keyboardType='email-address'
                            placeholder='ایمیل کاربری'
                            placeholderTextColor='gray'
                            autoCapitalize='none'
                            onChangeText={handleChange("email")}
                        />
                        <MaterialCommunityIcons name="email" size={24} color="orangered" />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput
                            style={styles.textInput}
                            autoCorrect={false}
                            autoComplete='password'
                            placeholder='کلمه عبور'
                            placeholderTextColor='gray'
                            autoCapitalize='none'
                            secureTextEntry
                            onChangeText={handleChange('password')}
                        />
                        <MaterialCommunityIcons name="lock" size={24} color="orangered" />
                    </View>
                    <View style={{marginBottom: 10}}/>
                    <View style={{width: '88%', marginRight: 35}}>
                        <CustomButton title='ورود' onPress={handleSubmit} color='tomato' />
                    </View>
                </>
            )}
        </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        marginTop: Constants.statusBarHeight + 30,
    },
    logo: {
        width: 150,
        height: 190,
        marginVertical: 30
    },
    textInput: {
        flex: 1,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 10,
        textAlign: "center"
    },
    button: {
        marginTop: 20
    }
});

export default LoginScreen;