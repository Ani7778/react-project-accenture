import { FETCH_DATA_SUCCESS_CASE_STUDIES, FETCH_DATA_FAILURE_CASE_STUDIES, FETCH_DATA_REQUEST_CASE_STUDIES } from "../types/caseStudiesTypes";

const fetchCaseStudiesDataRequest = ()=> {
    return {
        type: FETCH_DATA_REQUEST_CASE_STUDIES
    }
}

const  fetchCaseStudiesDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS_CASE_STUDIES,
        payload: data
    }
}

const  fetchCaseStudiesDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE_CASE_STUDIES,
        payload: error
    }
}

export { fetchCaseStudiesDataFailure, fetchCaseStudiesDataSuccess, fetchCaseStudiesDataRequest };
