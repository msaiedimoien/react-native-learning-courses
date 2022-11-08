import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import FlexScreen from "../components/shared/FlexScreen";
import {CoursesScreen, NewCoursesScreen, TopCoursesScreen} from "../screens";
import {RFPercentage} from "react-native-responsive-fontsize";
import CoursesContext from "../contexts/CoursesContext";
import {fetchCourses} from "../api/courses";
import {ActivityIndicator} from "react-native";

const TopTabs = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
    const [loading, setLoading] = useState(true);
    const [getCourses, setCourses] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const courses = await fetchCourses();
            setCourses(courses);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <CoursesContext.Provider value={{
            courses: getCourses,
            loadind: loading,
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
            {loading ? <ActivityIndicator animating={loading} size="large" style={{flex: 1}}/> : null}
        </CoursesContext.Provider>
    );
};

export default TopTabsNavigator;
