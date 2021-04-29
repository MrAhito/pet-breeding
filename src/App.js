import './App.css';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
        <Switch>
          {/* <Route path='/signup' exact component={SignUp} /> */}
        </Switch>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
        {/* <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
        <Switch>
          <Route path='/register' exact component={Register} />
        </Switch>
       */}
      </Router>
    </>
  );
}
export default App;
