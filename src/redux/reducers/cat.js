const initialState = {
    catList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const cat = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CAT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_CAT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_CAT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                catList: action.payload.data.result
            };

        case 'ADD_CAT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'ADD_CAT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'ADD_CAT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                catList: action.payload.data.result
            };
        default:
            return state;
    };

};

export default cat