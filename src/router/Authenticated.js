import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "src/screens/Home";
import Routes from "./routes";
import Activity from '../screens/Activity';

const Stack = createStackNavigator();

// const Authenticated = createStackNavigator({
//     [Routes.Home]: {
//         screen: Home
//     }
// }, {
//     initialRouteName: Routes.Home,
//     defaultNavigationOptions: {
//         header: null
//     }
// });

const Authenticated = () => {
    return (
        <Stack.Navigator
            initialRouteName={Routes.Home}
        >
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Activity} component={Activity} />
        </Stack.Navigator>
    );
}

export default Authenticated;
