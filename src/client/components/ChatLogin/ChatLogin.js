import React from 'react'
import './ChatLogin.scss';

import { connect } from 'react-redux';

import {
  enterChat,
  setNickname,
} from '../../store/actions/actions';

const ChatLogin = props => {
  let appendStr;

  if (!props.isLogin) {
    appendStr = (
      <div>
        <input type="text" placeholder="Введите nickname" onChange={e => props.setNickname(e.target.value) }/>
        <button onClick={() => props.enterChat()}>Продолжить</button>
      </div>
    )
  } else {
    appendStr = (
      <p>Добро пожаловать, <span>{props.userNickname}</span></p>
    )
  }

  return (<div className="login">{appendStr}</div>);
};


function mapDispatchToProps(dispatch) {
  return {
    enterChat: () => dispatch(enterChat()),
    setNickname: nickname => dispatch(setNickname(nickname)),
  }
}

export default connect(null, mapDispatchToProps)(ChatLogin);
