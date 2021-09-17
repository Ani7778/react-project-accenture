import { SEND_DATA_REQUEST_APPLY_TO_JOB, SEND_DATA_FAILURE_APPLY_TO_JOB, SEND_DATA_SUCCESS_APPLY_TO_JOB } from "../types/applyToJobTypes";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const applyToJobReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SEND_DATA_REQUEST_APPLY_TO_JOB: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case SEND_DATA_SUCCESS_APPLY_TO_JOB: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case SEND_DATA_FAILURE_APPLY_TO_JOB: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        default: return state
    }
}

export default applyToJobReducer;
