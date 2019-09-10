import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                <Post message = 'Hello it is my first post' countLikes='15'/>
                <Post message = 'oh what to write here ' countLikes='20'/>
            </div>
    )
}

export default MyPosts;