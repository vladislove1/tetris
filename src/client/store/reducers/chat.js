import {
  ENTER_CHAT,
  SET_USER_NICKNAME,
} from '../actions/actionTypes';

const initState = {
  isLogin: false,
  userNickname: null,
};

export default function chatReducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_NICKNAME:
      return {
        ...state,
        userNickname: action.newNickname,
      }

    case ENTER_CHAT:
      return {
        ...state,
        isLogin: true,
      }

    default: return state;
  }
}
