import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './createThought.js';

describe('CreateThought', () => {

  it('has two input fields', () => {
    const wrapper = shallow(<CreateThought />);

    expect(wrapper.find('input').length).toBe(2);
  });

  it('has a default state containing a body and title both starting with empty string', () => {
    const wrapper = mount(<CreateThought />);
    const expectedState = {
      title: '',
      body: ''
    }

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('fires an onChange event on user input which should update both state & the input field', () => {
    const wrapper = mount(<CreateThought />);
    const input = wrapper.find('input').first();
    const expectedState = {
      title: 'Idea title',
      body: ''
    }

    input.simulate('change', {target: {value: 'Idea title'} });
    expect(input.node.value).toEqual('Idea title');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('fires onChange on second input which should update both state & the input field', () => {
    const wrapper = mount(<CreateThought />);
    const input = wrapper.find('input').last();
    const expectedState = {
      title: '',
      body: 'Idea body'
    }

    input.simulate('change', {target: {value: 'Idea body'} });
    expect(input.node.value).toEqual('Idea body');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('has a submit button', () => {
    const wrapper = shallow(<CreateThought />);

    expect(wrapper.find('button').length).toBe(1);
  });

  it('fires submitIdea function with the data from state as an argument, and input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();
    const wrapper = mount(
      <CreateThought createThought={mockedSubmit} />
    );
    const expectedState = {
      title: '',
      body: ''
    };
    const input = wrapper.find('input').last();
    input.simulate('change', { target: { value: 'abc' } });
    wrapper.find('button').simulate('click');

    expect(wrapper.state()).toEqual(expectedState);
    expect(input.node.value).toEqual('');
    expect(mockedSubmit).toHaveBeenCalledTimes(1);
    expect(mockedSubmit).toHaveBeenCalledWith({title: '', body: 'abc'});
  });



});
