/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import { Button } from 'native-base';

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome!</Text>
                <TouchableOpacity title='Login' onPress={() => this.props.navigation.navigate('Tabs') } >
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity title='SignUp' onPress={() => this.props.navigation.navigate('') } >
                    <Text>SignUp</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default WelcomeScreen