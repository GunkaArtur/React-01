import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsItems = props.posts.map(post => <Post message = {post.massage} countLikes={post.countLikes}/> );

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