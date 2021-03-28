import React, {useMemo} from 'react';
import ProfileData from '../ProfileData/ProfileData';
import './Profile.css';
import {arrayToStandardFormat} from '../../satellite-functions/sattelite-functions';

const Profile = ({ userData }) => {
    const profileData = userData ? userData.profileData : '';
    const reposData = userData ? userData.reposData : '';

    const standardReposInfoData = useMemo(() => {
        return arrayToStandardFormat(reposData)
    },[reposData]);

    return (
        <div className='Profile'>
            <div className='Profile-asideColumn'>
                <a className='Profile-avatarWrapper' href={profileData.html_url} target='_blank'>
                    <img className='Profile-avatar' src={profileData.avatar_url}
                         alt={`${profileData.login} GitHub user avatar`} />
                </a>
                <div className='Profile-profileDataContainer'>
                    <p className='Profile-login'>{profileData.login}</p>
                    <p className='Profile-location'>{profileData.location}</p>
                    <p className='Profile-company'>{profileData.company}</p>
                </div>
            </div>
            <div className='Profile-mainColumn'>
                <div className='Profile-dataBlock'>
                    <ProfileData title='Repositories'
                                 contentObject={standardReposInfoData} />
                </div>
            </div>
        </div>
    );
};

export default Profile;