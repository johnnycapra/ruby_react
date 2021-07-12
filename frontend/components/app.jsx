import React from "react";
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';
import SplashContainer from './splash/splash_container';

const customHistory = createBrowserHistory(); 
const App = () => (
    <div className="app">
        <Router history={customHistory}>
            <BrowserRouter>
                <Switch history={customHistory}>
                    <Route exact path="/" component={SplashContainer} />
                </Switch>
            </BrowserRouter>
        </Router>
    </div>
);

export default App;
