/* eslint-disable prettier/prettier */
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

// const url = 'https://rent-book-libs.herokuapp.com'
const url = 'http://192.168.6.113:3030'
// const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJmYWRpbGhpbWF3YW5AZ21haWwuY29tIiwibGV2ZWwiOiJhZG1pbiIsInVzZXJuYW1lIjoiZmFkaWwiLCJmdWxsbmFtZSI6ImZhZGlsIiwiaWF0IjoxNTY3Njg5MzA3fQ.pjbG7vTxDxXd6AU_PXp7MVE3r1y48Y-31xB2k7da_1U"
// const token = AsyncStorage.getItem('@token')
const token = async () => {
    let token = '';
        try {
            token = await AsyncStorage.getItem('token') || 'none';
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    return token
}

export const login = (data) => {
    return {
        type:'LOGIN',
        payload: Axios.post(`${url}/user/login`, data)
    }
}

export const register = (data) => {
    return {
        type:'REGISTER',
        payload: Axios.post(`${url}/user/register`, data)
    }
}

export const getProfile = () => {
    return {
        type:'GET_PROFILE',
        payload: Axios.get(`${url}/user/profile`,{
            headers:{
            Authorization : token
            }
        }
        )
    }
}

export const getHistoryRentByUser = () => {
    return {
        type: 'GET_USER_HISTORY',
        payload: Axios.get(`${url}/trans/`,{
            headers:{
                Authorization : token
                }
            }
        )
    }
}