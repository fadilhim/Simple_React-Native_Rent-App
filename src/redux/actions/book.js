/* eslint-disable prettier/prettier */
import Axios from 'axios'

// const uerel = 'https://rent-book-libs.herokuapp.com'
const uerel = 'http://localhost:3030'
// const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJmYWRpbGhpbWF3YW5AZ21haWwuY29tIiwibGV2ZWwiOiJhZG1pbiIsInVzZXJuYW1lIjoiZmFkaWwiLCJmdWxsbmFtZSI6ImZhZGlsIiwiaWF0IjoxNTY3Njg5MzA3fQ.pjbG7vTxDxXd6AU_PXp7MVE3r1y48Y-31xB2k7da_1U"

export const getBook = (address, search) => {
    let url = address ? `${address}` : `${uerel}/book/?sortby=book_id`
    if (search !== undefined) url += `&search=${search}`
    return {
        type: 'GET_BOOKS',
        payload: Axios.get(`${url}`)
    }
}

export const getBookById = (id) => {
    return {
        type: 'GET_BOOK_BY_ID',
        payload: Axios.get(`${uerel}/book/${id}`)
    }
}

export const donateBook = (data) => {
    return {
        type: 'DONATE_BOOK',
        payload: Axios.post(`${uerel}/book/`,
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