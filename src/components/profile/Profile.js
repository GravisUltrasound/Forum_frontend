import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    return(
        <div>
            <ProfileInfo state={props.state}/>
            {/*<MyTopics/>*/}
        </div>
    );
}

export default Profile;