
import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/ui/Search';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})
describe('App tests', () => {

    it('Search renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it("Hello world renders", () => {
        const wrapper = shallow(<Search/>)
        console.log(wrapper.debug())
    })
})

