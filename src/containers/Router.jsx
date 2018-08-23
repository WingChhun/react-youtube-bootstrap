import React, {Component} from 'react';

import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';

//components

import App from "../App";
import "../styles/main.css";

class Router extends Component {
    constructor(props)
    {
        super(props);
    }

    componentWillMount = () => {

        //Change Title name
        document.title = "React - Youtube - Bootstrap App"
    }

    render()
    {
        return (

            <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>

                <Switch>
                    <Route exact path={`/`} component={App}/>
                </Switch>

            </BrowserRouter>

        )
    }

}

export default Router;