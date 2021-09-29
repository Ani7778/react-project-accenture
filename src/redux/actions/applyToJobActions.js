import { SEND_DATA_FAILURE_APPLY_TO_JOB, SEND_DATA_REQUEST_APPLY_TO_JOB, SEND_DATA_SUCCESS_APPLY_TO_JOB } from "../types/applyToJobTypes";

const applyToJobRequest = data=> {
    return {
        type: SEND_DATA_REQUEST_APPLY_TO_JOB,
        payload: data
    }
}

const applyToJobSuccess = data => {
    return {
        type: SEND_DATA_SUCCESS_APPLY_TO_JOB,
        payload: data
    }
}

const applyToJobFailure = error => {
    return {
        type: SEND_DATA_FAILURE_APPLY_TO_JOB,
        payload: error
    }
}

export { applyToJobSuccess, applyToJobFailure, applyToJobRequest };
