import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import Signupform from './Components/Sign-Up-Form/Sign-up-form';
import Signinform from './Components/Sign-In-form/Sign-in-form'

function App() {
  return (
    <div className="App">
    <Router>      
      <Switch>
        <Route  path="/sign-up-form" component= {Signupform} />
        <Route  path="/sign-in-form" component= {Signinform} />
        <Redirect to="/sign-up-form" />
      </Switch>
      </Router>
    </div>
  );
}

export default App;



