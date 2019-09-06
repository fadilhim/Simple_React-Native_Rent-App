/* eslint-disable prettier/prettier */
/* eslint-disable default-case */
const initialState = {
    booksList: [],
    bookDetail: {},
    searchForm: '',
    errMessage: '',
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const books = ( state = initialState, action) => {
    switch (action.type){
        case 'GET_BOOKS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_BOOKS_REJECTED':
            return{
                ...state,
                isRejected: true,
                isLoading: false
            }
        case 'GET_BOOKS_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                booksList: action.payload.data
            }
        case 'GET_BOOK_BY_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_BOOK_BY_ID_REJECTED':
            return{
                ...state,
                isRejected: true,
                isLoading: false
            }
        case 'GET_BOOK_BY_ID_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                bookDetail: action.payload.data.data[0]
            }
        case 'RENT_BOOK_USER_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'RENT_BOOK_USER_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message
                }
        case 'RENT_BOOK_USER_FULFILLED':
            initialState.bookDetail.availability = 2;
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                errMessage:action.payload.data.message
            }
        case 'DONATE_BOOK_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'DONATE_BOOK_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message,
            }
        case 'DONATE_BOOK_FULFILLED':
            // state.booksList.unshift(action.payload.data.data)
            return{
                ...state,
                isLoading:false,
                isFulfilled:true
            }
        // case 'ADD_SEARCH_FORM':
        //     return{
        //         ...state,
        //         isLoading:false,
        //         isFulfilled:true,
        //         searchForm: action.payload.search
        //     }
        default: 
            return state
    }
}

export default books