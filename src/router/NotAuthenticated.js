import React, { Component } from 'react';
import Start from "src/screens/Start";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from "./routes";

const Stack = createStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={Routes.Start} component={Start} />
        </Stack.Navigator>
    );
}

export default NotAuthenticated;