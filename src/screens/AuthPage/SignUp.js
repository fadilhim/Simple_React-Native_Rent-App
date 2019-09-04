/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class SignUpScreen extends Component{
    render(){
        return(
            <View
                behavior="padding"
                style={styles.Wrapper}
            >
                <Text style={{fontSize:23, color:'white'}}>Daftar</Text>
                <TextInput
                    placeholder='email'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    style={styles.inputField}
                />
                <TextInput
                    placeholder='password'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    style={styles.inputField}
                />
                <View>
                    <Text style={{color:'white', fontSize: 14,marginTop:10}}>Kembali</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
inputField: {
    width: 280,
    color: 'white',
    marginTop: 5
},
Wrapper : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F3A93'
},
text :{
    color: 'blue',
    fontSize: 23
}
});

export default SignUpScreen