import React from 'react';
import Information from './information/Information'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) =>{
    return(
        <div className={s.appProfile}>
            <Avatar/>
            <Nickname name={props.name}/>
            <Information/>
        </div>
    )
}

const Avatar = (props) =>{
    return(
        <div className={s.appAvatar}>
            <img width="100%" height="100%" src="/avatar.png"/>
        </div>
    )
}
let mainUserId=1;
const  Nickname = (props) =>{
    return(
        <div className={s.appNick}>
            {props.name}
            {props.state[mainUserId-1].name}
        </div>
    )
}

export default ProfileInfo;