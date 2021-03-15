import React, { Component } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native';
import Label from '../../component/ui/Label';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../router/routes';
import { CommonActions } from '@react-navigation/native';

export class Start extends Component {

    resetStack = CommonActions.reset({
        index: 0,
        routes: [
            { name: Routes.Splash },
        ],
    });

    authentication = async () => {
        try {
            await AsyncStorage.setItem('auth', "1")
            this.props.navigation.dispatch(this.resetStack);
        } catch (e) {
        }
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Label small>Not authenticate user screen.</Label>
                <View style={styles.btn} />
                <Button
                    title="Make Authenticated"
                    onPress={this.authentication}
                />
            </View>
        )
    }
}

export default Start

const styles = StyleSheet.create({
    btn: {
        marginTop: 10
    }
})




