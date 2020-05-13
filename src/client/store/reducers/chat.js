import {
  USER_NICKNAME,
} from '../actions/actionTypes';

const initState = {
  userNickname: null,
};

export default function chatReducer(state = initState, action) {
  switch (action.type) {
    case USER_NICKNAME:
      return {
        userNickname: action.newNickname,
      }

    default: return state;
  }
}
