import { SEND_DATA_REQUEST_APPLY_TO_JOB, SEND_DATA_FAILURE_APPLY_TO_JOB, SEND_DATA_SUCCESS_APPLY_TO_JOB } from "../types/applyToJobTypes";

const initialState = {
    status: 'initial',
    data: [],
    error: '',
}

const applyToJobReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SEND_DATA_REQUEST_APPLY_TO_JOB: {
            return {
                ...state,
                status: 'loading',
                error: ''
            }
        }
        case SEND_DATA_SUCCESS_APPLY_TO_JOB: {
            return {
                ...state,
                status: "success",
                data: action.payload,
            }
        }
        case SEND_DATA_FAILURE_APPLY_TO_JOB: {
            return {
                ...state,
                status: "failure",
                error: action.error
            }
        }

        default: return state
    }
}

export default applyToJobReducer;
