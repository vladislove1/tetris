import React from 'react';
import '../StartView.scss';

import { connect } from 'react-redux';
import {togglerAuth} from '../../../store/actions/startView'

const Auth = (props) => {
    console.log(props);
    const actionLogin = (
        <div className="auth">
            <h1>Login</h1>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <button onClick={props.toggleAuth}>go to registration</button>
            <button>Login</button>
        </div>
    )

    const actionRegistration = (
        <div className="auth">
            <h1>Registration</h1>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="password"/>
            <button onClick={props.toggleAuth}>go to login</button>
            <button>Registration</button>
        </div>
    )
    return (
        <div>
           
            {props.init.authToggle ? actionLogin : actionRegistration}
        </div>
    );

}

const mapStateToProps = (state) => ({
    init: state.init,
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAuth: () => {
            dispatch(togglerAuth());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
