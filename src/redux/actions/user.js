/* eslint-disable prettier/prettier */
import Axios from 'axios'
// const token = window.localStorage.getItem("token")

export const login = (data) => {
    return {
        type:'LOGIN',
        payload: Axios.post(`${process.env.REACT_APP_HOST}/user/login`, data)
    }
}

export const register = (data) => {
    return {
        type:'REGISTER',
        payload: Axios.post(`${process.env.REACT_APP_HOST}/user/register`, data)
    }
}

export const getProfile = () => {
    return {
        type:'GET_PROFILE',
        payload: Axios.get(`${process.env.REACT_APP_HOST}/user/profile`,{
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
        payload: Axios.get(`${process.env.REACT_APP_HOST}/trans/`,{
            headers:{
                Authorization : token
                }
        }
        )
    }
}