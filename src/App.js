import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import GameDetails from "./components/gamedetails/GameDetails";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={GameList} />
                <Route path="/detail/:id" exact component={GameDetails} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;
