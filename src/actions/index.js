import axios from 'axios';
import { SAVE_COMMENT } from 'actions/types';
import { FETCH_COMMENTS } from './types';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        comment
    };
}

export function fetchComments() {
    const comments = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        comments
    }
}