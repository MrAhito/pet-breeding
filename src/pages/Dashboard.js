import React, { Component } from 'react';
import Admin_Dash from '../components/Admin_Dash';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Adm_Message from './Adm_Message';
import Adm_post from './Adm_post';
import Adm_Report from './Adm_Report';
import Adm_Team from './Adm_Team';
import HomePage from './HomePage';

class Dashboard extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                    <Route path='/dashboard' exact component={Admin_Dash} />
                        <Route path='/' exact component={HomePage} />
                        <Route path='/post' exact component={Adm_post} />
                        <Route path='/messages' exact component={Adm_Message} />
                        <Route path='/team' exact component={Adm_Team} />
                        <Route path='/reports' exact component={Adm_Report} />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Dashboard
