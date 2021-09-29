import {
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_FAILURE,
    LOADING_MESSAGE
} from "../types/sendMessageTypes";

const initialState = {
    status: "initial",
    data: [],
    error: ''
}

const sendMessageReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST: {
            return {
                ...state,
                status: "loading",
                error: ''
            }
        }
        case SEND_MESSAGE_SUCCESS: {
            return {
                ...state,
                status: "success",
                data: action.payload,
            }
        }
        case SEND_MESSAGE_FAILURE: {
            return {
                ...state,
                status: "failure",
                error: action.error
            }
        }
         default: return state
    }
}

export default sendMessageReducer;
