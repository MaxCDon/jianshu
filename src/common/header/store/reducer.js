import { contants } from "./index";

const defaultState = {
    focused: false,
};

export default (state = defaultState, action) => {
    if(action.type === contants.SEARCH_FOCUS){
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return newState;
    }
    if(action.type === contants.SEARCH_BLUR){
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState;
    }

    return state;
}