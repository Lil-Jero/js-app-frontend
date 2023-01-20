import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../features/post.slice';

const DeletePost = ({ postId }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        // axios.delete('http://localhost:5000/post/' + postId)
        axios.delete('https://js-app.herokuapp.com/post/' + postId)
        dispatch(deletePost(postId))
    }
    return (
        <span id='delete-btn' onClick={() => handleDelete()}>&#10010;</span>
    );
};

export default DeletePost;