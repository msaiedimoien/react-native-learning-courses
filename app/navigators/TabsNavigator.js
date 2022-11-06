import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import MyCoursesScreen from "../screens/MyCoursesScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import TopTabsNavigator from "./TopTabsNavigator";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Courses'
            screenOptions={({route}) => ({
                headerShown: false,
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
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: 'whitesmoke',
                tabBarLabelStyle: {
                    fontFamily: 'byekan',
                    fontSize: 13,
                    marginBottom: 5,
                },
                tabBarStyle: {
                    height: 60
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