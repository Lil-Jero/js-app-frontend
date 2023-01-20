import React, { useState } from 'react';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPosts } from '../features/post.slice';

const NewPost = () => {
    const [message, setMessage] = useState("");
    const userId = useSelector((state) => state.user.userId)
    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault();

        const data = {
            message,
            author: userId,
            // Créer un id provisoire en attendant le retour de la BDD
            _id: Date.now(),
        }

        axios.post('https://js-app.herokuapp.com/post/', data).then(() => {
            dispatch(createPost(data));

            // GetPosts car il faut aller chercher l'id crée par MongoDB
            dispatch(getPosts())
            setMessage("")
        })
    }

    return (
        <form className='new-post-container' onSubmit={(e) => handleForm(e)}>
            <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Quoi de neuf ?'
                value={message}
            ></textarea>
            <input type="submit" value="envoyer" />
        </form>
    );
};

export default NewPost;