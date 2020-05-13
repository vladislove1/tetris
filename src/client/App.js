import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Chat from './components/Chat/Chat';
// import StartView from './components/StartView/StartView';

function App() {
  return (
    <Router>
      <Route path="/chat" exact component={Chat} />
    </Router>
  );
}

export default App;
