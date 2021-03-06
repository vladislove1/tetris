import React from 'react';
import './StartView.scss';

import { connect } from 'react-redux';
import Auth from './Auth/Auth';
import MainPage from './MainPage/MainPage';
// import {getSomething} from '../../actions/itemActions'

const StartView = (props) => {
    console.log(props);
    return (
        <div>
            { props.init.isLogin ? <MainPage/> : <Auth/>}
            <h1>{props.init.text}</h1>
        </div>
    );

}

const mapStateToProps = (state) => ({
    init: state.init,
});

const mapDispatchToProps = () => {
    return {
        setDate: (dispatch) => {
            // dispatch(getSomething());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartView);
