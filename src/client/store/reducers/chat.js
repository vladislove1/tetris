import {
  USER_NICKNAME,
} from '../actions/actionTypes';

const initState = {
  userNickname: 'undefined',
};

export default function chatReducer(state = initState, action) {
  switch (action.type) {
    case USER_NICKNAME:
      return {
        ...state,
      }

    default: return state;
  }
}
