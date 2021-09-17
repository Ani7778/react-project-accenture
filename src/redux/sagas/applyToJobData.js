import {call, put, takeLatest} from 'redux-saga/effects';
import {SEND_DATA_REQUEST_APPLY_TO_JOB} from "../types/applyToJobTypes";
import axios from "axios";
import {applyToJobFailure, applyToJobSuccess} from "../actions/applyToJobActions";

function* applyToJobData(action) {
    try {
        const {payload: requestData} = action;
        const { data } = yield call(axios.post, 'https://9y77tbxz14.execute-api.us-east-1.amazonaws.com/dev/apply-to-job', requestData);
        console.log(data)
        yield put(applyToJobSuccess());
    } catch (error) {
        console.log(error.message);
        yield put(applyToJobFailure(error.message))
    }
}

function* watcherSagaApplyToJob() {
    yield takeLatest(SEND_DATA_REQUEST_APPLY_TO_JOB, applyToJobData)
}

export default watcherSagaApplyToJob;
