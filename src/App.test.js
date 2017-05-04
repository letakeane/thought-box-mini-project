import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders App with className app', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('.app').length).toBe(1);
});

it('initial state starts with an empty array', () => {
  const wrapper = shallow(<App />);
  const expectedState = {
    thoughts: []
  }

  expect(wrapper.state()).toEqual(expectedState);
});

it('having 2 thoughts in state should mean there are two thoughtCards', () => {
  const wrapper = mount(<App />);
  wrapper.setState({ thoughts: [{title: '', body: ''}, {title: '', body: ''}] });

  expect(wrapper.find('.thoughtCard').length).toBe(2);
});

it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
  const wrapper = mount(<App />);
  wrapper.setState({ thoughts: [{title: '', body: ''}, {title: '', body: ''}] });
  const titleInput = wrapper.find('input').first();
  const bodyInput = wrapper.find('input').last();
  const createThoughtButton = wrapper.find('button');

  titleInput.simulate('change', {target: {value: ''}});
  bodyInput.simulate('change', {target: {value: ''}});
  createThoughtButton.simulate('click')

  expect(wrapper.find('.thoughtCard').length).toBe(3);
});
