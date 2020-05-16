import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Chat from './containers/Chat/Chat';
import StartView from './components/StartView/StartView';

function App() {
  return (
    <Switch>
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/" component={StartView} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
