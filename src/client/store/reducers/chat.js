import {
  ENTER_CHAT,
  SET_USER_NICKNAME,

  SEND_MESSAGE,
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

    case ENTER_CHAT:
      return {
        ...state,
        isLogin: true,
      }

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          text: state.textMessage,
          nickname: state.userNickname,
        }],
      }

    case SET_TEXT_MESSAGE:
      return {
        ...state,
        textMessage: action.text,
      }

    default: return state;
  }
}
