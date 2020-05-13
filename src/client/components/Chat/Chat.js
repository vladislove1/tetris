import React, { Component } from 'react';
import './Chat.scss';

import { connect } from 'react-redux';
// import {getSomething} from '../../actions/itemActions'

class Chat extends Component {
    render () {
      <div>Chat</div>
    }
}
const mapStateToProps = (state) => (
  {
    // item: state.item,
  }
);

const mapDispatchToProps = () => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
