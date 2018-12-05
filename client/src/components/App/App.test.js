import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import Home from '../Home/Home.jsx'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';


describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should matche the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render one <Home /> components', () => {
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});