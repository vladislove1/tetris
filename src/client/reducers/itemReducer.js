
import { GET_SOMETHING } from '../actions/types';

const initialState = {
    text: 'hi-ha'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SOMETHING:
            return {...state};
        default:
            return state;
    }
}