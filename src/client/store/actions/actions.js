import {
  USER_NICKNAME,
} from './actionTypes'

export function setNickname(nickname) {
  return {
    type: USER_NICKNAME,
    newNickname: nickname,
  }
}
