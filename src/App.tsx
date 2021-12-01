import React from "react";
import createHistory from "history/createBrowserHistory";
import { Route, Router, Switch } from "react-router";
import { SignupWelcome } from "./templates/SignupWelcome";

const history = createHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path=""
                    render={() => (
                        <SignupWelcome
                            subject="Welcome to OneShip"
                            userName="UserName"
                            confirmationUrl="https://localhost:3000"
                        />
                    )}
                    exact
                />
            </Switch>
        </Router>
    );
}

export default App;
