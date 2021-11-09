//vendor
import React from 'react'
//router
import {
    BrowserRouter as Router,Switch} from 'react-router-dom';
//Screens
import { LandingPage } from '../screens/LandingPage';
  

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/lading" component={LandingPage} />
                </Switch>
            </div>
      </Router>
    )
}
