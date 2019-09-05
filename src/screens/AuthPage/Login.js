/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, Text,TouchableOpacity, StyleSheet, TextInput, Modal, ScrollView, FlatList, StatusBar, Image, } from 'react-native'
import { Button, Container, Fab, Input, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
// import { connect } from 'react-redux'

class LoginScreen extends Component{
    render() {
        return(
            <View behavior="padding" style={styles.Wrapper}>
                <View style={styles.bodyWrapper}>
                    <View style={styles.SignInTitle}>
                        <Text>Here To Get {'\n'} Welcomed!</Text>
                    </View>
                    <View>
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
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                        {/* <TouchableOpacity title='Login' onPress={() => this.props.navigation.navigate('Tabs') }>
                            <Text style={{color:'white', marginTop: 10}}>Login</Text>
                        </TouchableOpacity> */}
                        <Button style={styles.SignInButton} dark title='Login' onPress={() => this.props.navigation.navigate('Tabs')} >
                            <Text style={{color:'white', marginTop: 10}}>Login</Text>
                            {/* <Icon name='arrow-right' /> */}
                        </Button>
                    </View>
                </View>
                <View style={styles.footerWrapper}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUp')} >
                        <Text style={{color:'white', marginTop: 10}}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('ForgotPass')} >
                        <Text style={{color:'white', marginTop: 10}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    Wrapper : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F3A93'
    },
    bodyWrapper: {
        flex: 5,
        justifyContent: 'center',
    },
    footerWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between'
    },
    SignInTitle: {
        // alignItems: 'flex-start'
    },
    inputField: {
        width: 280,
        color: 'white',
        borderColor: 'white',
        marginTop: 5
    },
    SignInButton: {
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    text :{
        color: 'blue',
        fontSize: 23
    },
});

export default  LoginScreen