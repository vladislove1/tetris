import {
  ENTER_CHAT,
  SET_USER_NICKNAME,
} from './actionTypes'

export function setNickname(nickname) {
  return {
    type: SET_USER_NICKNAME,
    newNickname: nickname,
  }
}

export function enterChat() {
  return {
    type: ENTER_CHAT,
  }
}
