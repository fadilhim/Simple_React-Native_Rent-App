/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SplashScreen extends Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
        this.props.navigation.navigate('App');
        }
    }

    render() {
        return (
        <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>
                BookZ
            </Text>
        </View>
        );
    }
}

const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4B4C72'
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
}

export default SplashScreen;