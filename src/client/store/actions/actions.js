import {
  ENTER_CHAT,
  SET_USER_NICKNAME,

  SEND_MESSAGE,
  SET_TEXT_MESSAGE,
} from './actionTypes'

export function setNickname(nickname) {
  return {
    type: SET_USER_NICKNAME,
    newNickname: nickname,
  };
}

export function enterChat() {
  return {
    type: ENTER_CHAT,
  };
}

export function sendMessage() {
  return {
    type: SEND_MESSAGE,
  };
}

export function setTextMessage(text) {
  return {
    type: SET_TEXT_MESSAGE,

    text,
  };
}
