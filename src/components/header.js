/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { View } from 'native-base'
import { Icon } from 'react-native-elements'

export default class Header extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>BookZ</Text>
                <Icon
                    name='search'
                    type='font-awesome'
                    color='black'
                    iconStyle={style.icon}
                    onPress={() => this.props.navigation.navigate('SearchBook')} 
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'white',
        maxHeight: 60
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 20,
    },
    icon: {
        marginRight: 20,
    }
})