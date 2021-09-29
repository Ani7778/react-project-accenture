import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_REQUEST, SEND_MESSAGE_FAILURE } from "../types/sendMessageTypes";

const sendMessageRequest = data => {
    return {
        type: SEND_MESSAGE_REQUEST,
        payload: data
    }
}

const sendMessageSuccess = data => {
    return {
        type: SEND_MESSAGE_SUCCESS,
        payload: data
    }
}

const sendMessageFailure = error => {
    return {
        type: SEND_MESSAGE_FAILURE,
        payload: error
    }
}

export { sendMessageSuccess, sendMessageFailure, sendMessageRequest  };
