import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartView from './components/StartView/StartView';

import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={StartView} />
      </Router>
    </Provider>
  );
}

export default App;
