import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import FlexScreen from "../components/shared/FlexScreen";
import {CoursesScreen, NewCoursesScreen, TopCoursesScreen} from "../screens";
import {RFPercentage} from "react-native-responsive-fontsize";
import { useToast } from "react-native-toast-notifications";
import {useDispatch} from "react-redux";
import {getCourses} from "../redux/actions";

const TopTabs = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        try {
            const fetchData = async () => {

                // customToast('normal', 'در حال بارگذاری...');
                dispatch(getCourses());
                // toast.hideAll();
            };
            fetchData();
        } catch (err) {
            console.log(err);
            // toast.hideAll();
        }
    }, []);

    const customToast = (type, message, duration = 4000) => {
        let id = toast.show(message, {
            animationType: 'slide-in',
            animationDuration: 500,
            duration,
            placement: "center",
            type: type,
            textStyle: {
                fontFamily: 'byekan',
                fontSize: RFPercentage(2),
            },
        });
    };

    return (
        <FlexScreen>
            <TopTabs.Navigator
                initialRouteName='AllCourses'
                screenOptions={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'darkgray',
                    tabBarLabelStyle: {
                        fontFamily: 'ih',
                        fontSize: RFPercentage(1.8)
                    },
                    tabBarStyle: {
                        // marginTop: 10
                        height: RFPercentage(6)
                    }
                }}>

                <TopTabs.Screen name='AllCourses' component={CoursesScreen} options={{title: "همه دوره ها"}}/>
                <TopTabs.Screen name='NewCourses' component={NewCoursesScreen} options={{title: "دوره های جدید"}}/>
                <TopTabs.Screen name='TopCourses' component={TopCoursesScreen} options={{title: "دوره های محبوب"}}/>

            </TopTabs.Navigator>
        </FlexScreen>
    );
};

export default TopTabsNavigator;
