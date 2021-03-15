import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import { styles } from "./styles";
import { CommonStyle } from "src/utils";
import Logo from 'src/assets/images/logo.png';
import { StackActions, NavigationAction, CommonActions } from '@react-navigation/native';
import Routes from '../../router/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SplashScreen extends React.Component {

    // navigate to authenticated route
    resetToAuth = CommonActions.reset({
        index: 0,
        routes: [
            { name: Routes.Authenticated },
        ],
    });
    
    //navigate to authenticated route
    resetToNotAuth = CommonActions.reset({
        index: 0,
        routes: [
            { name: Routes.NotAuthenticated },
        ],
    });


    componentDidMount() {
        this.checkAuthentication();
    }

    checkAuthentication = async () => {
        let isAuthenticated = await AsyncStorage.getItem("auth");
        if (isAuthenticated == "1")
            this.goTo(true);
        else
            this.goTo(false)

    }

    goTo = (value) => {
        if (value) {
            setTimeout(() => {
                this.props.navigation.dispatch(this.resetToAuth);
            }, 2000);
        } else {
            setTimeout(() => {
                this.props.navigation.dispatch(this.resetToNotAuth);
            }, 2000);
        }
    }

    render() {
        return (
            <View style={[CommonStyle.container, CommonStyle.content_center]}>
                <Image source={Logo}
                    style={styles.logo} />
            </View>
        )
    }
}

//set store values as props
// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//         token: state.token
//     }
// };

export default SplashScreen;
