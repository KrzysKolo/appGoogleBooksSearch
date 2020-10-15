import React from 'react';
import ReactDOM from 'react-dom';
import Error from '../components/ui/Error';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
})

