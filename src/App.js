import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Signupform from './Components/Sign-Up-Form/Sign-up-form';
import Signinform from './Components/Sign-In-form/Sign-in-form'

function App() {
  return (
    <div className="App">      
      <Router>
        <Link to='/'></Link>
        <Link to='/sign-in-form'></Link>
        <Route  exact path="/" component= {Signupform} />          
        <Route  path="/sign-in-form" component= {Signinform} />          
      </Router>
    </div>
  );
}

export default App;
