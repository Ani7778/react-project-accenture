import { TOGGLE_NAVBAR } from "./navbarTypes";

const initialState = {
    clicked: false
}

const navbarReducer = (state = initialState, action)=> {
    switch (action.type) {
        case TOGGLE_NAVBAR: return {
            ...state,
            clicked: !state.clicked,
        }

        default: return state
    }
}

export default navbarReducer;