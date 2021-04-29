import React, { Component } from 'react';
import Admin_Dash from '../components/Admin_Dash';
import SideBar from '../components/SideBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Adm_Message from './Adm_Message';
import Adm_post from './Adm_post';
import Adm_Report from './Adm_Report';
import Adm_Team from './Adm_Team';

class Dashboard extends Component {
    render() {
        return (
            <>
                <Router>
                    <SideBar />
                    <Switch>
                        <Route path='/dashboard' component={Admin_Dash} />
                        <Route path='/post' component={Adm_post} />
                        <Route path='/messages' component={Adm_Message} />
                        <Route path='/team' component={Adm_Team} />
                        <Route path='/reports' component={Adm_Report} />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Dashboard
