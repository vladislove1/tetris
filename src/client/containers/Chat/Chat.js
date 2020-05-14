import React, { Component } from 'react';
import './Chat.scss';

import { connect } from 'react-redux';

import ChatMenu from '../../components/ChatMenu/ChatMenu';
import ChatLogin from '../../components/ChatLogin/ChatLogin';

import {
  getMessages,
} from '../../store/actions/chat';

class Chat extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render () {
    return (
      <div>
        <ChatLogin
          isLogin={this.props.isLogin}
          userNickname={this.props.userNickname}
        />

        { this.props.isLogin ? <ChatMenu/> : false }
      </div>
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


function mapDispatchToProps(dispatch) {
  return {
    getMessages: () => dispatch(getMessages()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
