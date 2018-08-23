import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Videolist extends Component {

    constructor(props)
    {
        super(props);

        this.state = {

            videos: props.videos

        }
    }

    componentWillReceiveProps = props => {

        if (props.videos !== this.state.videos) {

            this.setState({videos: props.videos})
        }
    }

    render()
    {

        const {videos} = this.state;

        return (
            <div>

                <h1>
                    VideoList</h1>

                {videos && videos.map((video, i) => (
                    <h1 key={`video_${i}`}>hello world</h1>
                ))}
            </div>
        )
    }
}

export default Videolist;
Videolist.propTypes = {
    videos: PropTypes.array.isRequired
}