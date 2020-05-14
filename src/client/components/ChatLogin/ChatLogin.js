import React from 'react'
import './ChatLogin.scss';

import { connect } from 'react-redux';

import {
  enterToChat,
  setNickname,
} from '../../store/actions/chat';

const ChatLogin = props => {
  let appendStr;

  if (!props.isLogin) {
    appendStr = (
      <div>
        <input type="text" placeholder="Введите nickname" onChange={e => props.setNickname(e.target.value) }/>
        <button onClick={() => props.enterToChat()}>Продолжить</button>
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
    enterToChat: () => dispatch(enterToChat()),
    setNickname: nickname => dispatch(setNickname(nickname)),
  }
}

export default connect(null, mapDispatchToProps)(ChatLogin);
