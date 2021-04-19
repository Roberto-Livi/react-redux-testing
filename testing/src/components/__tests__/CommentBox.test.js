import React from 'react'
import CommentBox from 'components/CommentBox'
import { mount } from 'enzyme'

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

afterEach(() => {
    // unmounts the component that was created. Won't have to worry about other components that are created in other tests.
    wrapped.unmount();
})

it('has a textarea and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

describe('the textarea', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        })
        wrapped.update();
    })

    it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })

    it('when form is submitted, text area gets emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
})