import {put, takeLatest} from 'redux-saga/effects';
import {SEND_MESSAGE_REQUEST} from "../types/sendMessageTypes";
import {sendMessageSuccess, sendMessageFailure} from "../actions/sendMessageActions";

function* sendData() {
    try {
        // const delay = time => new Promise(resolve => setTimeout(resolve, time));
        console.log('saga working, waiting 2000ms')
        setTimeout(()=> {
            sendMessageSuccess({})
        }, 2000)
        console.log('finished waiting, 2000', {});
    } catch (error) {
        console.log(error.message);
        yield put(sendMessageFailure(error.message))
    }
}

function* watcherSagaSendMessage() {
    yield takeLatest(SEND_MESSAGE_REQUEST, sendData)
}

export default watcherSagaSendMessage;
