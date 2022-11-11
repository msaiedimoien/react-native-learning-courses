import React, {useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomFormField, SubmitButton } from '../components/forms';
import FlexScreen from "../components/shared/FlexScreen";
import {loginUser} from "../api/users";

const validationSchema = Yup.object().shape({
    email: Yup.string().required('این فیلد ضروری می باشد').email('ایمیل وارد شده معتبر نمی باشد'),
    password: Yup.string().required('این فیلد ضروری می باشد').min(6, 'پسورد نباید کمتر از 6 کاراکتر باشد'),
});

const LoginScreen = ({ navigation, route }) => {

    useEffect(() => {
        if (route.params.successRegister) {
            // customToast('success', 'ثبت نام با موفقیت انجام شد.');
        }
    }, []);

    const handleLoginUser = async (user) => {
        try {
            // customToast('normal', 'در حال برقراری ارتباط ...');
            const status = await loginUser(user);
            if(status===200){
                // toast.hideAll();
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Home'}]
                });
            }else{
                // toast.hideAll();
                // customToast('warning', 'ایمیل کاربری یا کلمه عبور صحیح نمی باشد.');
            }
        }catch (err) {
            // toast.hideAll();
            console.log(err);
        }
    };

    return (
        <FlexScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Formik
                initialValues={{email: "", password: ""}}
                onSubmit={(user) => {
                    handleLoginUser(user);
                    //
                }}
                validationSchema={validationSchema}
            >
                {() => (
                    <>
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
                            autoComplete='password'
                            placeholder='کلمه عبور'
                            placeholderTextColor='gray'
                            autoCapitalize='none'
                            secureTextEntry
                        />
                        <View style={{marginBottom: 10}}/>
                        <View style={{width: '90%'}}>
                            <SubmitButton title='ورود' color='tomato'/>
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

export default LoginScreen;