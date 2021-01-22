import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';


const CreatePost = () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate/>
            <hr/>
            <h1>Posts</h1>
            <PostList/>
        </div>
    );
};

export default CreatePost;