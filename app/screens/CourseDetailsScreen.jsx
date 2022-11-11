import React from 'react';
import { StyleSheet } from 'react-native';
import {RFPercentage} from "react-native-responsive-fontsize";
import CustomCard from "../components/shared/CustomCard";
import FlexScreen from "../components/shared/FlexScreen";

const CourseDetailsScreen = ({ navigation, route }) => {
    if (!route.params.course) return null;

    navigation.setOptions({
        headerShown: true,
        title: route.params.course.title,
        headerTitleStyle: {
            fontFamily: 'byekan',
            fontSize: RFPercentage(2.5),
            color: '#f0f0f0'
        },
        headerStyle: {
            backgroundColor: 'tomato'
        }
    });
    return (
        <FlexScreen style={styles.container}>
            <CustomCard
                item={route.params.course}
                showInfo={true}
            />
        </FlexScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: "#f8f4f4",
    },
});

export default CourseDetailsScreen;