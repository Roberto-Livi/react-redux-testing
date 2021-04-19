import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

// using let to reassign this variable several times throughout this file
let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows CommentBox component', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows CommentList component', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})