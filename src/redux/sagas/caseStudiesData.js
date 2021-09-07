import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_DATA_REQUEST_CASE_STUDIES} from "../types/caseStudiesTypes";
import axios from "axios";
import {fetchCaseStudiesDataFailure, fetchCaseStudiesDataSuccess} from "../actions/caseStudiesActions";

function* getCaseStudiesData() {
    try {
        const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');

        yield put(fetchCaseStudiesDataSuccess(data));
    } catch (error) {
        console.log(error.message);
        yield put(fetchCaseStudiesDataFailure(error.message))
    }
}

function* watcherSagaCaseStudies() {
    yield takeLatest(FETCH_DATA_REQUEST_CASE_STUDIES, getCaseStudiesData)
}

export default watcherSagaCaseStudies;

