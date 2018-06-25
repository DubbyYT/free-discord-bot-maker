import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/select-project.css";

const DiscordPassport = require("passport-discord");

export default class SelectProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="select-project">
                <div className="box">
                    <Link className="create" to="/create">Create Project</Link>
                    <div className="list">
                        <div className="item selected">Moderation Bot</div>
                        <div className="item">My Chat Bot</div>
                        <div className="item">Fun Bot</div>
                    </div>
                </div>
            </div>
        );
    }
}
