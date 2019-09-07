/* eslint-disable prettier/prettier */
const initialState = {
    userProfile:{},
    errMessage:'',
    message:'',
    token:'',
    status: '',
    isLoading:false,
    isRejected:false,
    isFulfilled:false,
}

const user = (state = initialState, action)=>{
    switch(action.type){
        case 'LOGIN_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'LOGIN_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message
                }
        case 'LOGIN_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                errMessage:action.payload.data.message,
                token:action.payload.data.token,
                status:action.payload.data.status
            }
        case 'REGISTER_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'REGISTER_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message
            }
        case 'REGISTER_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
            }
        case 'GET_PROFILE_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'GET_PROFILE_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message
            }
        case 'GET_PROFILE_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                userProfile: action.payload.data.data
            }
        default:
            return state
    }
}
export default user