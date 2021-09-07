import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga';
import caseStudiesReducer from "./reducers/caseStudiesReducer";
import navbarReducer from "./reducers/navbarReducer";
import jobPostingsReducer from "./reducers/jobPostingsReducer";
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducer = combineReducers({
    navbar: navbarReducer,
    caseStudies: caseStudiesReducer,
    jobPostings: jobPostingsReducer
})

const store = createStore(reducer,{}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
