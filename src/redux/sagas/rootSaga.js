import { all } from 'redux-saga/effects';
import watcherSagaCaseStudies from "./caseStudiesData";
import watcherSagaJobPostings from "./jobPostingsData";
import watcherSagaAllJobs from "./allJobsData";

export function* rootSaga() {
    yield all([watcherSagaCaseStudies(), watcherSagaJobPostings(), watcherSagaAllJobs()]);
}
