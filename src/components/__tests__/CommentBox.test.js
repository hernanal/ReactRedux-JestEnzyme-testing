import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrappedComponent;

beforeEach(() => {
    // Full DOM rendering
    wrappedComponent = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrappedComponent.unmount();
});

it('has a text area and two buttons', () => {
    expect(wrappedComponent.find('textarea').length).toEqual(1);
    expect(wrappedComponent.find('button').length).toEqual(2);
});

describe('text area functionality', () => {
    beforeEach(() => {
        wrappedComponent.find('textarea')
            .simulate('change', 
                {
                    target: {
                        value: 'new test comment'
                    }
                }
        );
        wrappedComponent.update();
    });

    it('has a text area that users can type in', () => {
        expect(wrappedComponent.find('textarea').prop('value')).toEqual('new test comment');
    });

    it('clears the text area after submitting the input', () => {
        wrappedComponent.find('form').simulate('submit');
        wrappedComponent.update();
        expect(wrappedComponent.find('textarea').prop('value')).toEqual('');
    });
});