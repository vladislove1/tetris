import React from 'react';

import { connect } from 'react-redux';
// import {getSomething} from '../../actions/itemActions'

const MainPage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>mainPage</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
