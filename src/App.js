import React, { Component } from "react";

import "./App.css";

import AddData from "./components/weather.report";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <AddData />
            </div>
        );
    }
}

export default App;
