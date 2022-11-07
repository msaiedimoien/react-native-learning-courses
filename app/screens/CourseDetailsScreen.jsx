import React from 'react';
import { View } from 'react-native';
import {RFPercentage} from "react-native-responsive-fontsize";
import CustomCard from "../components/shared/CustomCard";

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
    <View style={{padding: 10}}>
        <CustomCard item={route.params.course} showInfo={true}/>
    </View>
  );
};

export default CourseDetailsScreen;
