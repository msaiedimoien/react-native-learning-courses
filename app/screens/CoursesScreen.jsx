import React, {useContext, useEffect} from 'react';
import {StyleSheet, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import FlexScreen from "../components/shared/FlexScreen";
import CustomCard from "../components/shared/CustomCard";
import CoursesContext from "../contexts/CoursesContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {decodeToken} from "../utils/jwt";
import {useSelector} from "react-redux";

const CoursesScreen = ({ navigation }) => {
    const courses = useSelector(state => state.courses);

    // useEffect(() => {
    //     const getDecodeToken = async () => {
    //         const token = await AsyncStorage.getItem('token');
    //         console.log(decodeToken(token));
    //     }
    //     getDecodeToken();
    // }, []);

    return (
        <FlexScreen style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={c => c._id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('CourseDetails', {course: item})}>
                        <CustomCard item={item} showInfo={false}/>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />
        </FlexScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 15
    }
});

export default CoursesScreen;