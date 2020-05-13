import React, { Component } from 'react';
import './Chat.scss';

import { connect } from 'react-redux';
// import {getSomething} from '../../actions/itemActions'

class Chat extends Component {
    render () {
      const {
        userNickname,
      } = this.props;

      let appendStr;

      if (!userNickname) {
        appendStr = (
          <div>
            <input type="text" placeholder="Введите nickname"/>
            <button>Продолжить</button>
          </div>
        )
      } else appendStr = <p>Твой ник: {this.props.userNickname}</p>

      return (<div className="nickname">{appendStr}</div>);
    }
}

function mapStateToProps(state) {
  return {
    userNickname: state.userNickname,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // createQuizQuestion: item => dispatch(createQuizQuestion(item)),
    // finishCreateQuiz: () => dispatch(finishCreateQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
