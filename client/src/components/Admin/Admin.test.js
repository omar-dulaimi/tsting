import React from 'react';
import ReactDOM from 'react-dom';

import Admin from './Admin.jsx'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';



describe('<Admin />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Admin />);
    });

    it('should match the snapshot', () => {
        const tree = renderer.create(<Admin />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Admin />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should show the name of the component', () => {
        const h1Text = wrapper.find('h1').text();
        expect(h1Text).toEqual('Admin Page:');
    });
});