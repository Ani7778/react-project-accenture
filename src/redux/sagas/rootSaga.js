import { all } from 'redux-saga/effects';
import watcherSagaCaseStudies from "./caseStudiesData";
import watcherSagaJobPostings from "./jobPostingsData";
import watcherSagaAllJobs from "./allJobsData";
import watcherSagaSendMessage from "./sendMessageData";
import watcherSagaApplyToJob from "./applyToJobData";

export function* rootSaga() {
    yield all([
        watcherSagaCaseStudies(),
        watcherSagaJobPostings(),
        watcherSagaAllJobs(),
        watcherSagaSendMessage(),
        watcherSagaApplyToJob()
    ]);
}
