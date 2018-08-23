import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {API_KEY} from "../constants";
import Searchbar from "../components/SearchBar/Searchbar";

class Main extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (

            <div className="Main">
                <h1>
                    Main Component</h1>

                <Searchbar/>

            </div>

        )
    }
}

export default Main;
