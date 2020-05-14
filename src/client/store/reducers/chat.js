import {
  ENTER_CHAT,
  SET_USER_NICKNAME,

  ADD_MESSAGES,
  SET_TEXT_MESSAGE,
} from '../actions/actionTypes';

const initState = {
  isLogin: false,
  userNickname: null,

  messages: [],
  textMessage: null,
};

export default function chatReducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_NICKNAME:
      return {
        ...state,
        userNickname: action.newNickname,
      }

    case SET_TEXT_MESSAGE:
      return {
        ...state,
        textMessage: action.text,
      }

    case ENTER_CHAT:
      return {
        ...state,
        isLogin: true,
      }

    case ADD_MESSAGES:
      return {
        ...state,

        messages: [
          ...action.messages,
          ...state.messages,
        ],
      }

    default: return state;
  }
}
