import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import FlexScreen from "../components/shared/FlexScreen";
import CustomIcon from "../components/shared/CustomIcon";
import CustomSeparator from "../components/shared/CustomSeparator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StackActions} from "@react-navigation/native";
import {useSelector} from "react-redux";
import * as ImagePicker from 'expo-image-picker';

const AccountScreen = ({ navigation }) => {
    const user = useSelector(state => state.user);
    const [image, setImage] = useState(null);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userId');
        navigation.dispatch(StackActions.replace('Welcome'));
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <FlexScreen style={styles.screen}>
            <View style={styles.details}>
                <TouchableOpacity onPress={pickImage}>
                    {image
                        ? <Image source={{uri: image}} style={styles.image}/>
                        : <Image style={styles.image} source={require('../assets/msPhoto.jpg')}/>}
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>{user.fullname}</Text>
                    <Text style={styles.subTitle}>{user.email}</Text>
                    <CustomIcon name='cog-outline' size={40} color='tomato'/>
                </View>
            </View>
            <CustomSeparator height={2}/>
            <TouchableOpacity style={[styles.details, {margin: 15}]} onPress={handleLogout}>
                <CustomIcon name='logout' size={40} color='tomato' onPress={handleLogout}/>
                <Text style={styles.title}> خروج از حساب کاربری</Text>
            </TouchableOpacity>
        </FlexScreen>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: 60,
        paddingHorizontal: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 50,
        marginHorizontal: 10
    },
    title: {
        fontFamily: 'byekan',
        fontSize: 18,
        color: 'black'
    },
    subTitle: {
        fontSize: 14,
        color: 'darkgray',
        marginVertical: 5
    },
});

export default AccountScreen;
