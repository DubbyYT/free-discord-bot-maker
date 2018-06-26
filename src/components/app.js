import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SelectProject from "./select-project/select-project";
import BehaviourEditor from "./behaviour-editor/behaviour-editor";
import "../styles/global.css";
import CreateProject from "./create-project";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={SelectProject} />
                    <Route path="/behaviours" component={BehaviourEditor} />
                    <Route path="/create" component={CreateProject} />
                </div>
            </Router>
        );
    }
}
