import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Video extends Component {

    constructor(props)
    {
        super(props);

        this.state = {

            video: {}
        }
    }

    componentWillReceiveProps = props => {

        if (this.state.video != props.video) {

            this.setState({video: props.video})
        }

    }

    render()
    {
        return (

            <div>

                <h1>
                    Single video</h1>

            </div>

        )
    }
}

export default Video;

Video.propTypes = {

    video: PropTypes.object

}