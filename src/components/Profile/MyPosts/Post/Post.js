import React from 'react';
import classes from './Posts.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="avatar"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, officiis?</p>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;