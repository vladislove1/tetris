import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import StartView from './Components/StartView/StartView'

function App() {
  return (
    <Router>
      <Route path="/" exact component={StartView} />
    </Router>
  );
}

export default App;
