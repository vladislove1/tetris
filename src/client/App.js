import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom'

import Chat from './components/Chat/Chat';
// import StartView from './components/StartView/StartView';

function App() {
  return (
    <Switch>
      <Route path="/chat" component={Chat} />
    </Switch>
  );
}

export default App;
