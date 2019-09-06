/* eslint-disable prettier/prettier */
import Axios from 'axios'

// const url = 'https://rent-book-libs.herokuapp.com'
const url = 'http://192.168.6.113:3030'
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJmYWRpbGhpbWF3YW5AZ21haWwuY29tIiwibGV2ZWwiOiJhZG1pbiIsInVzZXJuYW1lIjoiZmFkaWwiLCJmdWxsbmFtZSI6ImZhZGlsIiwiaWF0IjoxNTY3Njg5MzA3fQ.pjbG7vTxDxXd6AU_PXp7MVE3r1y48Y-31xB2k7da_1U"

export const getBook = (address, search) => {
    // let alamat = address ? `${address}` : `${url}/book/?sortby=book_id`
    // if (search !== undefined) alamat += `&search=${search}`
    return {
        type: 'GET_BOOKS',
        payload: Axios.get(`${url}/book/?sortby=book_id`)
    }
}

export const getBookById = (id) => {
    return {
        type: 'GET_BOOK_BY_ID',
        payload: Axios.get(`${url}/book/${id}`)
    }
}

export const rentBookByUser = (data) => {
    return {
        type: 'RENT_BOOK_USER',
        payload: Axios.post(`${url}/trans/user`,
                data,
                { headers: { Authorization: token}})
    }
}


export const donateBook = (data) => {
    return {
        type: 'DONATE_BOOK',
        payload: Axios.post(`${url}/book/`,
                data,
                { headers: { Authorization: token}})
    }
}

// export const addSearch = (formSearch) => {
//     return {
//         type: 'ADD_SEARCH_FORM',
//         payload: {search: formSearch}
//     }
// }