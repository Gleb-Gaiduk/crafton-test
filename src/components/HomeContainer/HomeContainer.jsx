import React from 'react';
import './HomeContainer.css';
import UsersForm from '../UsersForm/UsersForm';
import {getUniqueTypedUser} from '../../satellite-functions/sattelite-functions';
import {addTypedUser, selectTypedUsers} from '../../redux/usersSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

const HomeContainer = () => {
    const existentTypedUsers = useSelector(selectTypedUsers);
    const isDisabledFormButton = existentTypedUsers.length === 0;

    const dispatch = useDispatch();
    const history = useHistory();

    const onFormSubmit = () => {
        const firstTypedUserId = existentTypedUsers[0].id;
        history.push(`/user/${firstTypedUserId}`);
    };

    const onSpaceClick = (e, values) => {
        if (e.code === 'Space' && values.userName) {
            const newTypedUser = getUniqueTypedUser(existentTypedUsers, values.userName);
            if (newTypedUser) dispatch(addTypedUser(newTypedUser));
        }
    };

    return (
        <div className='HomeContainer'>
            <div className='HomeContainer-body'>
                <UsersForm onFormSubmit={onFormSubmit}
                           onSpaceDown={onSpaceClick}
                           isDisabled={isDisabledFormButton} />
            </div>
        </div>
    );
};

export default HomeContainer;