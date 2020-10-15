
import React from 'react';
import ReactDOM from 'react-dom';
import BooksGrid from '../components/showbooks/BooksGrid';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})
describe('BooksGrid tests', () => {

    it('Search renders without a problem', () => {
        const div = document.createElement('section');
        ReactDOM.render(<BooksGrid />, section);
        ReactDOM.unmountComponentAtNode(section);
    })

    it("Hello world renders", () => {
        const wrapper = shallow(<BooksGrid/>)
        console.log(wrapper.debug())
    })
})

