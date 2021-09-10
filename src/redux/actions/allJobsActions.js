import { FETCH_DATA_SUCCESS_ALL_JOBS, FETCH_DATA_REQUEST_ALL_JOBS, FETCH_DATA_FAILURE_ALL_JOBS } from "../types/allJobsTypes";

const fetchAllJobsDataRequest = ()=> {
    return {
        type: FETCH_DATA_REQUEST_ALL_JOBS
    }
}

const fetchAllJobsDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS_ALL_JOBS,
        payload: data
    }
}

const fetchAllJobsDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE_ALL_JOBS,
        payload: error
    }
}

export { fetchAllJobsDataRequest, fetchAllJobsDataSuccess, fetchAllJobsDataFailure };
