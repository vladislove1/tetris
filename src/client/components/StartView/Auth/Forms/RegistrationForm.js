import React from 'react';

const RegistrationForm = (props) => {
    return (
        <div className="auth">
            <h1>Registration</h1>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="password"/>
            <button onClick={props.toggleAuth}>go to autorization</button>
            <button>Registration</button>
        </div>
    )
}

export default RegistrationForm;
