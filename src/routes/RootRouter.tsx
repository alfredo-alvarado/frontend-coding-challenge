
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../components/Errors/NotFound';
import CampervansDetail from '../containers/CampervansDetail';
import CampervansList from '../containers/CampervansList';

export const RootRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/campervans/:id" component={CampervansDetail} />
                    <Route exact path="/campervans" component={CampervansList} />
                    <Route exact path="/" render={() => <Redirect to='/campervans' />} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    )
}
