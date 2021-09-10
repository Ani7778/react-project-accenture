import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_DATA_REQUEST_ALL_JOBS} from "../types/allJobsTypes";
import axios from "axios";
import {fetchAllJobsDataSuccess, fetchAllJobsDataFailure} from "../actions/allJobsActions";

function* getAllJobsData() {
    try {
        const { data: {data} } = yield call(axios.get, 'https://9y77tbxz14.execute-api.us-east-1.amazonaws.com/dev/v1/job-postings');
        console.log(data)
        yield put(fetchAllJobsDataSuccess(data));
    } catch (error) {
        console.log(error.message);
        yield put(fetchAllJobsDataFailure(error.message))
    }
}

function* watcherSagaAllJobs() {
    yield takeLatest(FETCH_DATA_REQUEST_ALL_JOBS, getAllJobsData)
}

export default watcherSagaAllJobs;
