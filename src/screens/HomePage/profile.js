/* eslint-disable handle-callback-err */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import { getProfile } from '../../redux/actions/user'

class Profile extends Component {
    componentDidMount(){
        AsyncStorage.getItem('token',(err,res)=>{
            if(res){
                this.props.dispatch(getProfile(res))
            }
        })
    }

    logout = () =>{
        AsyncStorage.removeItem('token',(err, res)=>{
            if(!err){
                this.props.navigation.navigate('Login')
            }
        })
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png'}}/>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>{this.props.users.userProfile.username}</Text>
                    <Text style={styles.info}>{this.props.users.userProfile.level}</Text>
                    <Text style={styles.descriptionLabel}>Full Name</Text>
                    <Text style={styles.description}>{this.props.users.userProfile.fullname}</Text>
                    <Text style={styles.descriptionLabel}>User Id</Text>
                    <Text style={styles.description}>{this.props.users.userProfile.id}</Text>
                    <Text style={styles.descriptionLabel}>Email</Text>
                    <Text style={styles.description}>{this.props.users.userProfile.email}</Text>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.buttonDonateContainer} onPress={() => this.props.navigation.navigate('DonateBook')}>
                            <Text style={{color: 'white'}}>Donate Book</Text>  
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.logout()}>
                            <Text style={{color: 'white'}}>Log Out</Text>  
                        </TouchableOpacity>
                    </View>    
                </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#4B4C72",
        height:200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },
    name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    profileContainer: {
        marginTop: 30,
        marginBottom: 130,
        marginRight: 40
    },
    name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
    },
    info:{
        fontSize:16,
        color: "green",
        marginTop:10
    },
    descriptionLabel:{
        fontSize:20,
        fontWeight: 'bold',
        color: "#696969",
        marginTop: 5,
        textAlign: 'left'
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop: 1,
        marginBottom: 3,
        textAlign: 'left'
    },
    button: {
        marginTop: 70
    },
    buttonDonateContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#4B4C72",
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#8B0000",
    },
})

const MapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect (MapStateToProps) (Profile)