import React from 'react';
import ReactDOM from 'react-dom';
import Error from '../components/ui/Error';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';

configure({adapter: new Adapter()})
describe('Error tests', () => {

    it('Error renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Error />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it("Hello world renders", () => {
        const wrapper = shallow(<Error/>)
        console.log(wrapper.debug())
    })
    it('Error rendest', () => {
        const wrapper = shallow(<Error/>);
        expect(wrapper.find('p').text()).toBe('');
        wrapper.setState({
            isErr: "Wystąpił problem"
        })
        expect(wrapper.find('p').text()).toBe("Wystąpił problem")
    })
})


