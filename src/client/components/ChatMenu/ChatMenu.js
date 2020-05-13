import React from 'react'
import './ChatMenu.scss';

import { connect } from 'react-redux';

import {
  sendMessage,
  setTextMessage,
} from '../../store/actions/actions';

const ChatMenu = props => {
  return (
    <div className="chatMenu">
      <div className="messages">
        {
          props.messages.map((elem, index) => {
            return (
              <div key={index} className="message">
                <span>{elem.nickname}: </span>
                <p>{elem.text}</p>
              </div>
            )
          })
        }
      </div>

      <div className="sendMessage">
        <input type="text" placeholder="Введите сообщение" onChange={ e => props.setTextMessage(e.target.value) } />
        <button onClick={ () => props.sendMessage() }>Отправить</button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const {
    messages,
  } = state.chat;

  return {
    messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: () => dispatch(sendMessage()),
    setTextMessage: text => dispatch(setTextMessage(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMenu);
