/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, Text,TouchableOpacity, StyleSheet, TextInput, Modal, ScrollView, FlatList, StatusBar, Image, } from 'react-native'
import { Button, Container, Fab, Input, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
// import { connect } from 'react-redux'

class SignUpScreen extends Component{
    render() {
        return(
            <View behavior="padding" style={styles.Wrapper}>
                <View style={styles.bodyWrapper}>
                    <View >
                        <Text style={styles.SignInTitle}>Hi!{'\n'}Welcome!</Text>
                    </View>
                    <View>
                        <TextInput 
                            placeholder='username'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            style={styles.inputField}
                        />
                        <TextInput 
                            placeholder='fullname'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            style={styles.inputField}
                        />
                        <TextInput
                            placeholder='email'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            keyboardType='email-address'
                            style={styles.inputField}
                        />
                        <TextInput
                            placeholder='password'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            secureTextEntry={true}
                            style={styles.inputField}
                        />
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                        <Button style={styles.SignInButton} dark title='Login' onPress={() => this.props.navigation.navigate('Tabs')} >
                            <Text style={{color:'white', marginTop: 10}}>Login</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.footerWrapper}>
                    <View >
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')} >
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('ForgotPass')} >
                            <Text style={styles.text}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
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
        // backgroundColor: '#1F3A93'
    },
    bodyWrapper: {
        flex: 6,
        justifyContent: 'center',
    },
    footerWrapper: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SignInTitle: {
        fontSize: 40,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#4B4C72',
        paddingBottom: 50
    },
    inputField: {
        width: 280,
        color: 'gray',
        borderColor: 'gray',
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
        color: '#4B4C72',
        fontSize: 15,
        textDecorationLine: 'underline'
    },
});

export default  SignUpScreen