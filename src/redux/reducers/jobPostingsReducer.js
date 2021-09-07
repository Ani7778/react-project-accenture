import { FETCH_DATA_REQUEST_JOB_POSTINGS, FETCH_DATA_SUCCESS_JOB_POSTINGS, FETCH_DATA_FAILURE_JOB_POSTINGS } from "../types/jobPostingsTypes";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const jobPostingsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_DATA_REQUEST_JOB_POSTINGS: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case FETCH_DATA_SUCCESS_JOB_POSTINGS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case FETCH_DATA_FAILURE_JOB_POSTINGS: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        default: return state
    }
}

export default jobPostingsReducer;
