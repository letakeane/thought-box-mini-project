import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const wrapper = shallow(<ThoughtList thoughtList={[]}/>);

    expect(wrapper.find('.thoughtList').length).toBe(1);
  });

  it('has multiple ThoughtCard class fields', () => {
    const mockThoughts = [{title: '', body: ''}, {title: '', body: ''}, {title: '', body: ''}, {title: '', body: ''}];
    const wrapper = mount(<ThoughtList thoughtList={mockThoughts}/>);
    const thoughtCard = wrapper.find('.thoughtCard');

    expect(thoughtCard.length).toBe(4);
  });

});
