import React from 'react';

import "./../styles/style.scss";

const Profile = () => {
    return (
        <React.Fragment>
            <div className="profile">
                <div className="profile-header">
                    <img src="https://pbs.twimg.com/profile_banners/1730918582/1396382131/600x200" alt="header"/>
                </div>
                <div className="profile-image">
                    <img src="https://pbs.twimg.com/profile_images/956041572805697536/ejbJkmtS_400x400.jpg" alt="profile" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Profile;