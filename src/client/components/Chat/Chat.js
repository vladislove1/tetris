import React, { Component } from 'react';
import './Chat.scss';

import { connect } from 'react-redux';

import {
  enterChat,
  setNickname,
} from '../../store/actions/actions';

class Chat extends Component {
  render () {
    const {
      isLogin,
      userNickname,
    } = this.props;

    let appendStr;

    if (!isLogin) {
      appendStr = (
        <div>
          <input type="text" placeholder="Введите nickname" onChange={e => this.props.setNickname(e.target.value) }/>
          <button onClick={() => this.props.enterChat()}>Продолжить</button>
        </div>
      )
    } else appendStr = <p>Добро пожаловать, {userNickname}</p>

    return (<div className="nickname">{appendStr}</div>);
  }
}

function mapStateToProps(state) {
  const {
    isLogin,
    userNickname,
  } = state.chat;

  return {
    isLogin,
    userNickname,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enterChat: () => dispatch(enterChat()),
    setNickname: nickname => dispatch(setNickname(nickname)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
