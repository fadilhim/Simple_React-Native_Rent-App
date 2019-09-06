/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, Text,TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Button } from 'native-base';

// import { register } from '../../redux/actions/user'

import { connect } from 'react-redux'

class DonateBookScreen extends Component{
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
                    console.log('gagal')
                }else{
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
        return(
            <View behavior="padding" style={styles.Wrapper}>
                <View style={styles.bodyWrapper}>
                    <View >
                        <Text style={styles.SignInTitle}>Donate Book!</Text>
                    </View>
                    <View>
                        <TextInput 
                            placeholder='Title'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            style={styles.inputField}
                            onChangeText={text => this.handleChange( 'title', text )}
                        />
                        <TextInput 
                            placeholder='Description'
                            multiline={true}
                            numberOfLines={5}
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            style={styles.descriptionField}
                            onChangeText={text => this.handleChange( 'description', text )}
                        />
                        <TextInput
                            placeholder='Genre ID'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            style={styles.inputField}
                            onChangeText={text => this.handleChange( 'genre_id', text )}
                        />
                        <TextInput
                            placeholder='Date Released'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            style={styles.inputField}
                            onChangeText={text => this.handleChange( 'date_released', text )}
                        />
                        <TextInput
                            placeholder='Rating'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            style={styles.inputField}
                            onChangeText={text => this.handleChange( 'rating', text )}
                        />
                        <TextInput
                            placeholder='image'
                            underlineColorAndroid='grey'
                            placeholderTextColor='grey'
                            style={styles.inputField}
                            onChangeText={text => this.handleChange( 'image', text )}
                        />
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                        <Button style={styles.SignUpButton} dark title='SignUp' onPress={() => this.handleSubmit()} >
                            <Text style={{color:'white'}}>Donate</Text>
                        </Button>
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
        fontSize: 35,
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
    descriptionField: {
        width: 280,
        height: 100,
        color: 'gray',
        borderColor: 'gray',
        marginTop: 5
    },
    SignUpButton: {
        marginTop:10,
        marginRight: 20,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#4B4C72",
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

export default connect (mapStateToProps) (DonateBookScreen)