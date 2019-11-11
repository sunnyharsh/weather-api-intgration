import React, { Component } from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Provider } from "react-redux";
import store from "../store/index.store";
import App from "../App";
class Index extends Component {
    state = {};
    render() {
        return (
            <BrowserRouter>
                <Provider store={store()}>
                    <App />
                </Provider>
            </BrowserRouter>
        );
    }
}

export default Index;
