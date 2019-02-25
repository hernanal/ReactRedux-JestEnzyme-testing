import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrappedComponent;

beforeEach(() => {
    wrappedComponent = shallow(<App />);
});

it('shows a comment box', () => {
    // should only test for CommentBox existence, not the inner workings of CommentBox
    expect(wrappedComponent.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrappedComponent.find(CommentList).length).toEqual(1);
});
