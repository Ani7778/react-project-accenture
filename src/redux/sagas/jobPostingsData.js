import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_DATA_REQUEST_JOB_POSTINGS} from "../types/jobPostingsTypes";
import axios from "axios";
import {fetchJobPostingsDataFailure, fetchJobPostingsDataSuccess} from "../actions/jobPostingsActions";

function* getJobPostingsData() {
    try {
        const { data: {data} } = yield call(axios.get, 'https://9y77tbxz14.execute-api.us-east-1.amazonaws.com/dev/v1/job-postings?limit=6');
        console.log(data)
        yield put(fetchJobPostingsDataSuccess(data));
    } catch (error) {
        console.log(error.message);
        yield put(fetchJobPostingsDataFailure(error.message))
    }
}

function* watcherSagaJobPostings() {
    yield takeLatest(FETCH_DATA_REQUEST_JOB_POSTINGS, getJobPostingsData)
}

export default watcherSagaJobPostings;
