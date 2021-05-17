import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('<App />', () => {
  it('should render app', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  });
  it('should check number of <h1> elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should check number of <h1> elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe(
      'SWAPI Starships - CRA with Class Components'
    );
  });
  it('should check whether the className header exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.heading').exists()).toBe(true);
  });

  it('matches the screenshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
