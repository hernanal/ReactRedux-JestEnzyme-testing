import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrappedComponent;

beforeEach(() => {
    // Full DOM rendering
    wrappedComponent = mount(<CommentBox />);
});

afterEach(() => {
    wrappedComponent.unmount();
});

it('has a text area and a button', () => {
    expect(wrappedComponent.find('textarea').length).toEqual(1);
    expect(wrappedComponent.find('button').length).toEqual(1);
});