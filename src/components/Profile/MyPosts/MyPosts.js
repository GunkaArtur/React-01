import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { id: 0, massage: 'Hello it is my first post', countLikes: 15 },
        { id: 1, massage: 'oh what to write here', countLikes: 20 },
        { id: 2, massage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, nostrum?', countLikes: 22 },
        { id: 3, massage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', countLikes: 3 },
        { id: 4, massage: 'Lorem ipsum dolor sit amet', countLikes: 100},
    ];

    let postsItems = posts.map(post => <Post message = {post.massage} countLikes={post.countLikes}/> );

    return (
            <div className={classes.postsBlock}>
                <h3>My Posts:</h3>
                <div className={classes.addPostBlock}>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div>
                    { postsItems }
                </div>
            </div>
    )
}

export default MyPosts;