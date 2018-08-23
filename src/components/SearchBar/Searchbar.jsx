import React, {Component} from 'react';
import PropTypes from 'prop-types';

import YTSearch from 'youtube-api-search';

class Searchbar extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            inputValue: ""
        }
    }

    handleChange = (event) => {

        const inputValue = event
            .target
            .value
            .trim();

        this.setState({inputValue});
    }

    onKeyPress = event => {

        const {API_KEY, getVideos} = this.props;
        const {inputValue} = this.state;

        if (event.key === "Enter") {

            //*Call search API
            console.log("User hit onKeypress enter!");

            YTSearch({
                key: API_KEY,
                term: inputValue
            }, (data) => {

                getVideos(data);

            })
        }
    }

    render()
    {

        const {inputValue} = this.state;

        return (

            <div>

                <input
                    type="text"
                    onChange=
                    {event=>this.handleChange(event)}
                    onKeyPress=
                    {event => this.onKeyPress(event)}
                    value={inputValue}
                    placeHolder={"Enter a video to search for"}/>

            </div>

        )
    }
}

Searchbar.propTypes = {

    API_KEY: PropTypes.string.isRequired,
    getVideos: PropTypes.func.isRequired
}
export default Searchbar;
