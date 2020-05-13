import React, { Component } from 'react';
import './Chat.scss';

import { connect } from 'react-redux';
// import {getSomething} from '../../actions/itemActions'

class Chat extends Component {
    render () {
      return (<div>Chat</div>)
    }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    // quiz: state.create.quiz
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // createQuizQuestion: item => dispatch(createQuizQuestion(item)),
    // finishCreateQuiz: () => dispatch(finishCreateQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
