import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {API_KEY} from "../constants";
import Searchbar from "../components/SearchBar/Searchbar";

class Main extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {

            videos: []
        }
    }

    getVideos = (videos) => {

        this.setState({videos})
        console.log("getVideos", videos);
    }

    render()
    {
        return (

            <div className="Main">
                <h1>
                    Main Component</h1>

                <Searchbar API_KEY ={API_KEY} getVideos ={this.getVideos}/>

            </div>

        )
    }
}

export default Main;
