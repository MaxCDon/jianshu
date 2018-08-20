import { contants } from "./index";
import { fromJS } from 'immutable';

//immutable库
//immutable对象

const defaultState = fromJS({
    focused: false,
});

export default (state = defaultState, action) => {
    if(action.type === contants.SEARCH_FOCUS){
        return state.set('focused', true);
    }
    if(action.type === contants.SEARCH_BLUR){
        return state.set('focused', false);
    }

    return state;
}