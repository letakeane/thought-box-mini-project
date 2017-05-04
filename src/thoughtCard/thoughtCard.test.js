import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const mockThought = {title: 'ideaTitle', body: 'ideaBody'};
    const wrapper = shallow(<ThoughtCard thought={mockThought}/>);

    expect(wrapper.find('.thoughtCard')).toBeTruthy();
  });

  it('has a title and body', () => {
    const mockThought = {title: 'ideaTitle', body: 'ideaBody'};
    const wrapper = shallow(<ThoughtCard thought={mockThought}/>);
    const titleContent = wrapper.find('.titleContent');
    const bodyContent = wrapper.find('.bodyContent');

    expect(titleContent.text()).toEqual('ideaTitle');
    expect(bodyContent.text()).toEqual('ideaBody');
  });
});
