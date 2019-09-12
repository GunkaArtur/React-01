import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        { id: 0, massage: 'Hello it is my first post', countLikes: 15 },
        { id: 1, massage: 'oh what to write here', countLikes: 20 },
        { id: 2, massage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, nostrum?', countLikes: 22 },
        { id: 3, massage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', countLikes: 3 },
        { id: 4, massage: 'Lorem ipsum dolor sit amet', countLikes: 100},
    ];

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
                    <Post message = {postData[0].massage} countLikes={postData[0].countLikes}/>
                    <Post message = {postData[1].massage} countLikes={postData[1].countLikes}/>
                    <Post message = {postData[2].massage} countLikes={postData[2].countLikes}/>
                    <Post message = {postData[3].massage} countLikes={postData[3].countLikes}/>
                    <Post message = {postData[4].massage} countLikes={postData[4].countLikes}/>
                </div>
            </div>
    )
}

export default MyPosts;