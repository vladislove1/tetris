import {
  CHAT_NAME,
} from '../actions/actionTypes';

const initState = {
  chatName: '',
};

export default function chatReducer(state = initState, action) {
  switch (action.type) {
    case CHAT_NAME:
      return {
        ...state,
        chatName: 'New name',
      }

    default: return state;
  }
}
