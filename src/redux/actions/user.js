/* eslint-disable prettier/prettier */
import Axios from 'axios'

const url = 'https://rent-book-libs.herokuapp.com'
// const token = window.localStorage.getItem("token")

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