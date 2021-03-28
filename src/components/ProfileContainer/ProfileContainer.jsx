import React, {useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {
    fetchUserAccount,
    selectActiveUserNameById, selectErrorMessage,
    selectFetchedUserByName, selectIsFoundTypedUserByName,
    selectLoadingStatus, selectProfileData
} from '../../redux/usersSlice';
import {useDispatch, useSelector} from 'react-redux';
import Profile from '../Profile/Profile';
import Preloader from '../Preloader/Preloader';
import Message from '../Message/Message';
import './ProfileContainer.css';

const ProfileContainer = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    const loadingStatus = useSelector(selectLoadingStatus);
    const errorMessage = useSelector(selectErrorMessage);

    const activeUserName = useSelector(state => selectActiveUserNameById(state, userId));
    const isFetchedUser = useSelector(state => selectFetchedUserByName(state, activeUserName));
    const isFoundTypedUser = useSelector(state => selectIsFoundTypedUserByName(state, activeUserName));

    const activeProfileData = useSelector(state => selectProfileData(state, activeUserName));

    useEffect(() => {
            if (!isFetchedUser && isFoundTypedUser === undefined) {
                dispatch(fetchUserAccount(activeUserName));
            }
        },[activeUserName, isFoundTypedUser, isFetchedUser, dispatch]);

    return (
        <div className='ProfileContainer'>
            <NavLink className='ProfileContainer-link' to='/'>Back to Home page</NavLink>
            {loadingStatus === 'loading'
            && <Preloader />}

            {errorMessage
            && !isFetchedUser
            && <Message text={errorMessage} status='error' />}

            {isFetchedUser
            && <Profile userData={activeProfileData} />}
        </div>
    );
};

export default ProfileContainer;