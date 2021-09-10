import { FETCH_DATA_SUCCESS_ALL_JOBS, FETCH_DATA_REQUEST_ALL_JOBS, FETCH_DATA_FAILURE_ALL_JOBS } from "../types/allJobsTypes";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const allJobsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_DATA_REQUEST_ALL_JOBS: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case FETCH_DATA_SUCCESS_ALL_JOBS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case FETCH_DATA_FAILURE_ALL_JOBS: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        default: return state
    }
}

export default allJobsReducer;
