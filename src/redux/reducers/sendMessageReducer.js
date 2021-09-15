import {
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_FAILURE,
    LOADING_MESSAGE
} from "../types/sendMessageTypes";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const sendMessageReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case SEND_MESSAGE_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case SEND_MESSAGE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        // case LOADING_MESSAGE: {
        //     return {
        //         ...state,
        //         loading: action.loading,
        //     }
        // }
        //
         default: return state
    }
}

export default sendMessageReducer;
