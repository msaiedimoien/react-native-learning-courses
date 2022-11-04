import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Constants from "expo-constants";
import CustomFormField from "../components/forms/CustomFormField";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('نام و نام خانوادگی ضروری می باشد'),
    email: Yup.string().required('ایمیل کاربری ضروری می باشد').email('ایمیل وارد شده معتبر نمی باشد'),
    password: Yup.string().required('کلمه عبور ضروری می باشد').min(6, 'پسورد نباید کمتر از 6 کاراکتر باشد'),
    passwordConfirm: Yup.string().required('تکرار کلمه عبور ضروری می باشد').oneOf([Yup.ref('password'), null], 'کلمه های عبور باید یکسان باشند'),
});

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Formik
                initialValues={{fullName: "", email: "", password: "", passwordConfirm: ""}}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {() => (
                    <>
                        <CustomFormField
                            name='fullName'
                            iconName='account'
                            iconColor='orangered'
                            autoCorrect={false}
                            placeholder='نام و نام خانوادگی'
                            placeholderTextColor='gray'
                            autoCapitalize='none'
                        />
                        <CustomFormField
                            name='email'
                            iconName='email'
                            iconColor='orangered'
                            autoCorrect={false}
                            autoComplete='email'
                            keyboardType='email-address'
                            placeholder='ایمیل کاربری'
                            placeholderTextColor='gray'
                            autoCapitalize='none'
                        />
                        <CustomFormField
                            name='password'
                            iconName='lock'
                            iconColor='orangered'
                            autoCorrect={false}
                            placeholder='کلمه عبور'
                            placeholderTextColor='gray'
                            autoCapitalize='none'
                            secureTextEntry
                        />
                        <CustomFormField
                            name='passwordConfirm'
                            iconName='lock'
                            iconColor='orangered'
                            autoCorrect={false}
                            placeholder='تکرار کلمه عبور'
                            placeholderTextColor='gray'
                            autoCapitalize='none'
                            secureTextEntry
                        />
                        <View style={{marginBottom: 10}}/>
                        <View style={{width: '90%'}}>
                            <SubmitButton title='ثبت' color='tomato'/>
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
    button: {
        marginTop: 20
    }
});

export default RegisterScreen;