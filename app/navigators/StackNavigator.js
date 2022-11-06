import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {WelcomeScreen, LoginScreen, RegisterScreen, CourseDetailsScreen} from "../screens";
import TabsNavigator from "./TabsNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
          headerShown: false,
      }}>
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name='CourseDetails' component={CourseDetailsScreen} />
          <Stack.Screen name='Home' component={TabsNavigator} />
      </Stack.Navigator>
  );
};

export default StackNavigator;
