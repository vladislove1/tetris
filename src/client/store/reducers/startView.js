import {
  TOGGLE_AUTH
  } from '../actions/actionTypes';
  
  const initState = {
    isLogin: false,
    authToggle: false,
    text: 'hello mazafaka',
    form: {
      login: '',
      password: '',
      repeatPassword: ''
    }
  };
  
  export default function chatReducer(state = initState, action) {
    switch (action.type) {
      case TOGGLE_AUTH:
        return {
          ...state,
          authToggle: !state.authToggle,
        }
      default: return state;
    }
  }
  