/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Profile extends Component{
    render(){
        return(
            <View>
                <Text>Halaman Profile</Text>
                <TouchableOpacity>
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Profile