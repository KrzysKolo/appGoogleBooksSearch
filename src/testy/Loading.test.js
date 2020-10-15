
import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../components/ui/Loading';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})
describe('App tests', () => {

    it('Loading renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Loading />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it("Hello world renders", () => {
        const wrapper = shallow(<Loading/>)
        console.log(wrapper.debug())
    })
})

