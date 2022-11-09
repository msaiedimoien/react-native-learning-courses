import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import FlexScreen from "../components/shared/FlexScreen";
import {CoursesScreen, NewCoursesScreen, TopCoursesScreen} from "../screens";
import {RFPercentage} from "react-native-responsive-fontsize";
import CoursesContext from "../contexts/CoursesContext";
import {fetchCourses} from "../api/courses";
import { useToast } from "react-native-toast-notifications";
import {loadingToast} from "../utils/toasts";

const TopTabs = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
    const toast = useToast();
    const [getCourses, setCourses] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {

                customToast('normal', 'در حال بارگذاری...', 60000);
                const courses = await fetchCourses();
                setCourses(courses);
                toast.hideAll();
            };
            fetchData();
        }catch (err) {
            console.log(err);
            toast.hideAll();
        }
    }, []);

    const customToast = (type, message, duration= 4000) => {
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
        <CoursesContext.Provider value={{
            courses: getCourses,
        }}>
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
        </CoursesContext.Provider>
    );
};

export default TopTabsNavigator;
