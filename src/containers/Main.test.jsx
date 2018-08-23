import React from 'react';
import ReactDOM from 'react-dom';

import {API_KEY} from "../constants";

import Enzyme, {shallow, createMount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Seachbar from "./Main";
import Main from './Main';

Enzyme.configure({adapter: new Adapter()});

describe("Main", () => {

    const props = {
        API_KEY: API_KEY,
        getVideos: jest.fn()
    }

    it("Renders Main without crashing", () => {

        const wrapper = shallow(<Main {...props}/>);

        expect(wrapper).toMatchSnapshot();

    })

    it("getVideos, updates state", () => {

        const wrapper = shallow(<Main {...props}/>);
        const instance = wrapper.instance();

        const videos = [
            {
                video: '1'
            }
        ]
        instance.getVideos(videos);

        expect(instance.state.videos).toBe(videos);

    });

});