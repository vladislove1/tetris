import React, { Component } from 'react';
import './StartView.scss';

import { connect } from 'react-redux';
import {getSomething} from '../../actions/itemActions'

class StartView extends Component {
    render () {
        return (
            <div>{this.props.item.text}</div>
        );
    }
}
const mapStateToProps = (state) => ({
    item: state.item,
});
const mapDispatchToProps = () => {
    return {
        setDate: (dispatch) => {
            dispatch(getSomething());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StartView);
