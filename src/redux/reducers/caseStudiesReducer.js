import { FETCH_DATA_FAILURE_CASE_STUDIES, FETCH_DATA_SUCCESS_CASE_STUDIES, FETCH_DATA_REQUEST_CASE_STUDIES } from "../types/caseStudiesTypes";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const caseStudiesReducer = (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_DATA_REQUEST_CASE_STUDIES: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case FETCH_DATA_SUCCESS_CASE_STUDIES: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        }
        case FETCH_DATA_FAILURE_CASE_STUDIES: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        default: return state
    }
}

export default caseStudiesReducer;
