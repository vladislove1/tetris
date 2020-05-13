import React, { Component } from 'react';
import './Chat.scss';

import { connect } from 'react-redux';

import {
  setNickname,
} from '../../store/actions/actions';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enterNickname: '',
    };
  }

  changeNickname(event) {
    this.setState({
      enterNickname: event.target.value,
    });

    console.log(this.state);
  }

  render () {
    const {
      userNickname,
    } = this.props;

    let appendStr;

    if (!userNickname) {
      appendStr = (
        <div>
          <input type="text" placeholder="Введите nickname" onChange={event => this.changeNickname(event) }/>
          <button onClick={() => this.props.onChangeNickname(this.state.enterNickname)}>Продолжить</button>
        </div>
      )
    } else appendStr = <p>Твой ник: {this.props.userNickname}</p>

    return (<div className="nickname">{appendStr}</div>);
  }
}

function mapStateToProps(state) {
  return {
    userNickname: state.chat.userNickname,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeNickname: nickname => dispatch(setNickname(nickname)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
