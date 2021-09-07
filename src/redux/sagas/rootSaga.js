import { all } from 'redux-saga/effects';
import watcherSagaCaseStudies from "./caseStudiesData";
import watcherSagaJobPostings from "./jobPostingsData";

export function* rootSaga() {
    yield all([watcherSagaCaseStudies(), watcherSagaJobPostings()]);
}
