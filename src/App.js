import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFound from "./components/Error/NotFound";

/**
* @author
* @function App
**/

function App(props) {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={ HomePage } />
                <Route path="*" component={ NotFound } />
            </Switch>
        </Router>
    );
}

export default App;