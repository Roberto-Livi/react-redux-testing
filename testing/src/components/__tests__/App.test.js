import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

it('shows CommentBox component', () => {
    const app = shallow(<App />);

    expect(app.find(CommentBox).length).toEqual(1);
})

it('shows CommentList component', () => {
    const app = shallow(<App />);

    expect(app.find(CommentList).length).toEqual(1);
})