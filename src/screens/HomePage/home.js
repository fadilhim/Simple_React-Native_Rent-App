/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import BookCarousel from '../../components/carousel'

class HomeScreen extends Component {
    _renderItem({item,index}){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                <Image
                    source={require('../../assets/user-icon.png')}
                    />
                <Text style={{color:'#fff'}} >{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <BookCarousel />
                <Text>Home!</Text>
            </View>
        );
    }
}

export default HomeScreen