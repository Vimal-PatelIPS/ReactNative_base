import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Label from '../../component/ui/Label';
import Routes from '../../router/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, StackActions } from '@react-navigation/native';

export class Home extends Component {


    resetStack = CommonActions.reset({
        index: 0,
        routes: [
            { name: Routes.Splash }
        ],
    });


    removeAuthentication = async () => {
        try {
            await AsyncStorage.clear();
            this.props.navigation.dispatch(this.resetStack);
        } catch (e) {
        }
    }
    popAction = StackActions.pop(1);
    popAllAction = StackActions.popToTop();

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Label small>Authenticate user screen.</Label>
                <View style={styles.btn} />
                <Button
                    title="Nativegate to Activity... screen"
                    onPress={() => this.props.navigation.navigate(Routes.Activity)}
                />
                <View style={styles.btn} />
                <Button
                    title="Push Activity... screen"
                    onPress={() => this.props.navigation.push(Routes.Activity)}
                />
                <View style={styles.btn} />
                <Button
                    title="Pop Home screen"
                    onPress={() => this.props.navigation.dispatch(this.popAction)}
                />
                <View style={styles.btn} />
                <Button
                    title="Pop all screens"
                    onPress={() => this.props.navigation.dispatch(this.popAllAction)}
                />
                <View style={styles.btn} />
                <Button
                    title="Remove autentication"
                    onPress={this.removeAuthentication}
                />
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    btn: {
        marginTop: 10
    }
})