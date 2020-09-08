import React from 'react';

const AutorizationForm = (props) => {
    return (
        <div className="auth">
            <h1>Autorization</h1>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <button onClick={props.toggleAuth}>go to registration</button>
            <button>Autorization</button>
        </div>
    )
}

export default AutorizationForm;
