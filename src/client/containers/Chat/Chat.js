import React, { Component } from 'react';
import './Chat.scss';

import { connect } from 'react-redux';

import ChatLogin from '../../components/ChatLogin/ChatLogin';

class Chat extends Component {
  render () {
    return (
      <ChatLogin
        isLogin={this.props.isLogin}
        userNickname={this.props.userNickname}
      />
    )
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

export default connect(mapStateToProps, null)(Chat)
