import React from 'react';
import '../StartView.scss';

import { connect } from 'react-redux';
import { togglerAuth } from '../../../store/actions/startView'
import AutorizationForm from './Forms/AutorizationForm';
import RegistrationForm from './Forms/RegistrationForm';

const Auth = (props) => {
    return (
        <div>
            { 
                props.init.authToggle 
                    ? <AutorizationForm toggleAuth={props.toggleAuth} /> 
                    : <RegistrationForm toggleAuth={props.toggleAuth} />
            }
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
