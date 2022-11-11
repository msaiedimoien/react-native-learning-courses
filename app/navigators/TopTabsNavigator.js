import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import FlexScreen from "../components/shared/FlexScreen";
import {CoursesScreen, NewCoursesScreen, TopCoursesScreen} from "../screens";
import {RFPercentage} from "react-native-responsive-fontsize";
import {useDispatch} from "react-redux";
import {getCourses} from "../redux/actions";
import {loadingToast} from "../utils/toasts";
import Toast from "react-native-tiny-toast";

const TopTabs = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const fetchData = async () => {
                // loadingToast("در حال بارگذاری...");
                dispatch(getCourses());
                // Toast.hide();
            };
            fetchData();
        } catch (err) {
            console.log(err);

        }
    }, []);

    return (
        <FlexScreen>
            <TopTabs.Navigator
                initialRouteName='AllCourses'
                backBehavior="none"
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

                <TopTabs.Screen name="AllCourses" component={CoursesScreen} options={{title: "همه دوره ها"}}/>
                <TopTabs.Screen name="NewCourses" component={NewCoursesScreen} options={{title: "دوره های جدید"}}/>
                <TopTabs.Screen name="TopCourses" component={TopCoursesScreen} options={{title: "دوره های محبوب"}}/>

            </TopTabs.Navigator>
        </FlexScreen>
    );
};

export default TopTabsNavigator;