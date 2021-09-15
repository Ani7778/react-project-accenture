import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_REQUEST, SEND_MESSAGE_FAILURE, LOADING_MESSAGE } from "../types/sendMessageTypes";

// export const loadUsers = () => dispatch => {
//     dispatch({ type: SEND_MESSAGE_REQUEST });
// };

const sendMessageRequest = ()=> {
    return {
        type: SEND_MESSAGE_REQUEST
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

// const loadingMessage = status => {
//     return {
//         type: LOADING_MESSAGE,
//         loading: status
//     }
// }

export { sendMessageSuccess, sendMessageFailure, sendMessageRequest  };
