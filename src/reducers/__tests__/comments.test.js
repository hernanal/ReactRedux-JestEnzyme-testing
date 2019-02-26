import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        comment: 'New test comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New test comment']);
});