import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import FlexScreen from "../components/shared/FlexScreen";
import CustomText from "../components/shared/CustomText";
import {RFPercentage} from "react-native-responsive-fontsize";

const CourseDetailsScreen = ({ navigation, route }) => {
    if(!route.params.course) return null;

    navigation.setOptions({
        headerShown: true,
        title: route.params.course.title,
        headerTitleStyle:{
            fontFamily: 'byekan',
            fontSize: RFPercentage(2.5),
            color: '#f0f0f0'
        },
        headerStyle: {
            backgroundColor: 'tomato'
        }
    });
  return (
    <FlexScreen>
        <CustomText fontFamily='byekan' size={2.2}>{route.params.course.title}</CustomText>
    </FlexScreen>
  );
};

const styles = StyleSheet.create({});

export default CourseDetailsScreen;
