import { FETCH_DATA_SUCCESS_JOB_POSTINGS, FETCH_DATA_REQUEST_JOB_POSTINGS, FETCH_DATA_FAILURE_JOB_POSTINGS } from "../types/jobPostingsTypes";

const fetchJobPostingsDataRequest = ()=> {
    return {
        type: FETCH_DATA_REQUEST_JOB_POSTINGS
    }
}

const fetchJobPostingsDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS_JOB_POSTINGS,
        payload: data
    }
}

const fetchJobPostingsDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE_JOB_POSTINGS,
        payload: error
    }
}

export { fetchJobPostingsDataFailure, fetchJobPostingsDataSuccess, fetchJobPostingsDataRequest };
