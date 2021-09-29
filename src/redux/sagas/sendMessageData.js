import {call, put, takeLatest} from 'redux-saga/effects';
import {SEND_MESSAGE_REQUEST} from "../types/sendMessageTypes";
import {sendMessageSuccess, sendMessageFailure} from "../actions/sendMessageActions";
import axios from "axios";

function* sendData(action) {
    try {
        const {payload: requestData} = action;
        console.log('payload', requestData)
        const { data } = yield call(axios.post, 'https://9y77tbxz14.execute-api.us-east-1.amazonaws.com/dev/v1/frontend/send-message', requestData);
        console.log(data)
        yield put(sendMessageSuccess());
    } catch (error) {
        console.log(error.message);
        yield put(sendMessageFailure(error.message))
    }
}

function* watcherSagaSendMessage() {
    yield takeLatest(SEND_MESSAGE_REQUEST, sendData)
}

export default watcherSagaSendMessage;
