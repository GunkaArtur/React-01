import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.banner}>
                <img src="http://www.mqi.bb/images/2017/BMW-Banner.jpg" alt="banner"/>
            </div>
            <div className={classes.descriptionBlock}>
                Profile info
            </div>
        </div>
    )
}

export default ProfileInfo;