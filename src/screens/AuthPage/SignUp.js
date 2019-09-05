/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, Text,TouchableOpacity, StyleSheet, TextInput, Modal, ScrollView, FlatList, StatusBar, Image, } from 'react-native'
import { Button, Container, Fab, Input, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

import { register } from '../../redux/actions/user'

import { connect } from 'react-redux'

class SignUpScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {
            SignUpForm: {}
        }
    }

    handleChange = (name, value) => {
        let newFormData = {...this.state.SignUpForm}
        newFormData[name] = value
        this.setState({
            SignUpForm: newFormData
        })
    }

    handleSubmit = () => {
        const data = this.state.SignUpForm
        this.props.dispatch(register(data))
            .then(res => {
                if(res.value.data.status === 401){
                    // this.setState({
                        // modalLoginFalse: true
                        console.log('gagal')
                    // })
                }else{
                    // localStorage.setItem("token", res.action.payload.data.token)
                    this.registered()
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    registered = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        console.log(this.state.SignUpForm)
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
                            onChangeText={text => this.handleChange( 'username', text )}
                        />
                        <TextInput 
                            placeholder='fullname'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            style={styles.inputField}
                            onChangeText={text => this.handleChange( 'fullname', text )}
                        />
                        <TextInput
                            placeholder='email'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            keyboardType='email-address'
                            style={styles.inputField}
                            onChangeText={text => this.handleChange( 'email', text )}
                        />
                        <TextInput
                            placeholder='password'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            secureTextEntry={true}
                            style={styles.inputField}
                            onChangeText={text => this.handleChange( 'password', text )}
                        />
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                        <Button style={styles.SignUpButton} dark title='SignUp' onPress={() => this.handleSubmit()} >
                            <Text style={{color:'white', marginTop: 10}}>Sign Up</Text>
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
    SignUpButton: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
    text :{
        color: '#4B4C72',
        fontSize: 15,
        textDecorationLine: 'underline'
    },
});

const mapStateToProps = state => {
    return{
        user: state.users
    }
}

export default connect (mapStateToProps) (SignUpScreen)