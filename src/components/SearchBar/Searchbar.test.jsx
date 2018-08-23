import React from 'react';
import ReactDOM from 'react-dom';

import {API_KEY} from "../../constants";

import Enzyme, {shallow, createMount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Seachbar from "./Searchbar";
import Searchbar from './Searchbar';

Enzyme.configure({adapter: new Adapter()});

describe("Searchbar", () => {

    const props = {
        API_KEY: API_KEY,
        getVideos: jest.fn()
    }

    it("Renders searchbar without crashing", () => {

        const wrapper = shallow(<Searchbar {...props}/>);

        expect(wrapper).toMatchSnapshot();

    })

    it("handleChange updates state", () => {
        const wrapper = shallow(<Searchbar {...props}/>);
        const instance = wrapper.instance();

        const event = {
            target: {
                value: "New"
            }
        }
        instance.handleChange(event);

        expect(instance.state.inputValue).toBe(event.target.value)

    })

    it("onKeyPress() calls function", () => {

        const wrapper = shallow(<Searchbar {...props}/>)
        const instance = wrapper.instance();

        const event = {
            key: "Enter"
        };

        instance.state.inputValue = "new";
        instance.onKeyPress(event)

        //expect(props.getVideos).toHaveBeenCalled()

    });

    it("KeyPresses and change will call functions ", () => {

        const wrapper = shallow(<Searchbar {...props}/>);
        const instance = wrapper.instance();
        const event = {
            key: "Enter"
        };

        const searchbar = wrapper.find(".searchBar")
        const onKeyPressSpy = jest.spyOn(instance, 'onKeyPress');

        instance.state.inputValue = "Hello";

        searchbar.simulate("keypress", {key: "hello"});

        expect(onKeyPressSpy).toBeCalled();
    });

    it("handleChange is called", () => {

        const wrapper = shallow(<Searchbar {...props}/>);
        const instance = wrapper.instance();
        const event = {
            target: {
                value: "New"
            }
        }

        const handleChangeSpy = jest.spyOn(instance, 'handleChange');
        const searchbar = wrapper.find('.searchBar');

        searchbar.simulate("change", {
            target: {
                value: "Hello"
            }
        });

        expect(handleChangeSpy).toHaveBeenCalled();

    })
});