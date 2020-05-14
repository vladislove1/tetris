import React from 'react'
import './ChatMenu.scss';

import { connect } from 'react-redux';

import {
  addNewMessage,
  setTextMessage,
} from '../../store/actions/chat';

const ChatMenu = props => {
  return (
    <div className="chatMenu">
      <div className="messages">
        {
          props.messages.map((elem, index) => {
            return (
              <div key={index} className="message">
                <span>{elem.userNickname}: </span>
                <p>{elem.textMessage}</p>
              </div>
            )
          })
        }
      </div>

      <div className="sendMessage">
        <input type="text" placeholder="Введите сообщение" onChange={ e => props.setTextMessage(e.target.value) } />
        <button onClick={ () => props.addNewMessage() }>Отправить</button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    messages: state.chat.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewMessage: () => dispatch(addNewMessage()),
    setTextMessage: text => dispatch(setTextMessage(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMenu);
