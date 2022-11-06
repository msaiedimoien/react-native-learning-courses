import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import FlexScreen from "../components/shared/FlexScreen";
import {CoursesScreen, NewCoursesScreen, TopCoursesScreen} from "../screens";

const TopTabs = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
  return (
    <FlexScreen>
        <TopTabs.Navigator
            initialRouteName= 'AllCourses'
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'darkgray',
                tabBarLabelStyle: {
                    fontFamily: 'ih',
                    fontSize: 14
                },
                tabBarStyle: {
                    // marginTop: 10
                }
            }}
        >
            <TopTabs.Screen name='NewCourses' component={NewCoursesScreen} options={{title: "دوره های جدید"}} />
            <TopTabs.Screen name='AllCourses' component={CoursesScreen} options={{title: "همه دوره ها"}} />
            <TopTabs.Screen name='TopCourses' component={TopCoursesScreen} options={{title: "دوره های محبوب"}} />
        </TopTabs.Navigator>
    </FlexScreen>
  );
};

export default TopTabsNavigator;
