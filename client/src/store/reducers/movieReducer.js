import { MOVIES_LOAD_FAIL, MOVIES_LOAD_SUCCESS } from "../actions/types"

const INITIAL_STATE = {
    movies: [],
    err: null
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case MOVIES_LOAD_SUCCESS:
            return { 
                ...state, 
                movies: action.payload 
            } 
        case MOVIES_LOAD_FAIL:
            return {
                ...state,
                err: action.payload
            }
        default:
            return state;
    }
}