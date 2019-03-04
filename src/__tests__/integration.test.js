// Integration tests, test many parts of the application. Unlike unit tests that test one piece of functionaliy

import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {

    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {
                name: 'TEST FETCHED COMMENT #1'
            },
            {
                name: 'TEST FETCHED COMMENT #2'
            }
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('#fetch-comments-btn').simulate('click');
    
    moxios.wait(() => {
        wrapped.update();
        
        expect(wrapped.find('li').length).toEqual(2);

        // Let jest know that the test is complete
        done();
        
        wrapped.unmount();
    });
});