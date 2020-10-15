
import React from 'react';
import ReactDOM from 'react-dom';
import BooksIte, from '../components/showbooks/BooksItem';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})
describe('BooksIte tests', () => {

    it('Loading renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BooksIte />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it("Hello world renders", () => {
        const wrapper = shallow(<BooksIte/>)
        console.log(wrapper.debug())
    })
})

