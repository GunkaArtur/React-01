import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className= {classes.content}>
            <div className={classes.banner}>
                <img src="http://www.mqi.bb/images/2017/BMW-Banner.jpg" alt="banner"/>
            </div>
            <div>
                <div className={classes.item}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, officiis?</div>
                <div className={classes.item}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                <div className={classes.item}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            </div>

        </div>
    )
}

export default Profile;