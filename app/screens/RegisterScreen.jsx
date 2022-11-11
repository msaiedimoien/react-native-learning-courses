import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomFormField, SubmitButton } from '../components/forms';
import FlexScreen from "../components/shared/FlexScreen";
import {registerUser} from "../api/users";

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام خانوادگی ضروری می باشد'),
    email: Yup.string().required('ایمیل کاربری ضروری می باشد').email('ایمیل وارد شده معتبر نمی باشد'),
    password: Yup.string().required('کلمه عبور ضروری می باشد').min(6, 'پسورد نباید کمتر از 6 کاراکتر باشد'),
    passwordConfirmation: Yup.string().required('تکرار کلمه عبور ضروری می باشد').oneOf([Yup.ref('password'), null], 'کلمه های عبور باید یکسان باشند'),
});

const RegisterScreen = ({ navigation }) => {

    const handleUserRegister = async(user) => {
        try {
            // customToast('normal', 'ثبت نام کاربر...', 60000);
            const status = await registerUser(user);

            if (status === 201) {
                // toast.hideAll();
                navigation.navigate('Login', {successRegister: true});
            } else {
                // toast.hideAll();
                // customToast('warning', 'توجه: متاسفانه خطایی رخ داده است.');
            }
        } catch (err) {
            // customToast('warning', 'توجه: متاسفانه خطایی رخ داده است.');
        }
    };

    return (
        <FlexScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Formik
                initialValues={{fullname: "", email: "", password: "", passwordConfirmation: ""}}
                validationSchema={validationSchema}
                onSubmit={user => {
                    handleUserRegister(user);
                }}
            >
                {() => (
                    <>
                        <CustomFormField
                            name='fullname'
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
                            name='passwordConfirmation'
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
                            <SubmitButton title='ثبت کاربر' color='tomato'/>
                        </View>
                    </>
                )}
            </Formik>
        </FlexScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 190,
        marginVertical: 30
    },
});

export default RegisterScreen;