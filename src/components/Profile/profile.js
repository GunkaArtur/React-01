import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={classes.banner}>
                <img src="http://www.mqi.bb/images/2017/BMW-Banner.jpg" alt="banner"/>
            </div>
            <div>
                Profile info
            </div>
            <MyPosts />

        </div>
    )
}

export default Profile;