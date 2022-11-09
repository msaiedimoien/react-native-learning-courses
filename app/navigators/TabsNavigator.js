import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import TopTabsNavigator from "./TopTabsNavigator";
import {RFPercentage} from "react-native-responsive-fontsize";
import {AccountScreen, MyCoursesScreen} from "../screens";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Courses"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'MyCourses') {
                        iconName = 'message-video';
                    } else if (route.name === 'Courses') {
                        iconName = focused ? 'school' : 'school-outline';
                    } else if (route.name === 'Account') {
                        iconName = focused ? 'account-circle' : 'account-circle-outline';
                    }

                    return (
                        <MaterialCommunityIcons name={iconName} color={color} size={size}/>
                    )
                },
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: 'whitesmoke',
                tabBarLabelStyle: {
                    fontFamily: 'byekan',
                    fontSize: RFPercentage(1.9),
                    marginBottom: 5,
                },
                tabBarStyle: {
                    height: RFPercentage(7.5)
                },
            })
            }>
            <Tab.Screen name='MyCourses' component={MyCoursesScreen} options={{title: 'دوره های من'}}/>
            <Tab.Screen name='Courses' component={TopTabsNavigator} options={{title: 'دوره ها'}}/>
            <Tab.Screen name='Account' component={AccountScreen} options={{title: 'کاربری من'}}/>
        </Tab.Navigator>
    )
};

export default TabsNavigator;