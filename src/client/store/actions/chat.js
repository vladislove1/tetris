import axios from '../../axios';

import {
  ENTER_TO_CHAT,
  SET_USER_NICKNAME,

  ADD_MESSAGES,
  SET_TEXT_MESSAGE,
} from './actionTypes';

export function setNickname(nickname) {
  return {
    type: SET_USER_NICKNAME,
    newNickname: nickname,
  };
}

export function enterToChat() {
  return { type: ENTER_TO_CHAT };
}

export function setTextMessage(text) {
  return {
    type: SET_TEXT_MESSAGE,
    text,
  };
}

export function getMessages() {
  return (dispatch, getState) => {
    axios
      .get('/chat/messages')
      .then(res => {
        dispatch(addMessagesSuccess(res.data.messages));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function addNewMessage() {
  return (dispatch, getState) => {
    const {
      textMessage,
      userNickname,
    } = getState().chat;

    const sendObj = {
      textMessage,
      userNickname,
    };

    axios
      .post('/chat/messages', sendObj)
      .then(res => {
        console.log(res);
        dispatch(addMessagesSuccess([sendObj]))
      })
      .catch(err => { console.log(err); });
  }
}

export function addMessagesSuccess(messages) {
  return {
    type: ADD_MESSAGES,
    messages,
  };
}
