import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectTypedUsers} from '../../redux/usersSlice';

const NabBarItem = ({userData}) => {
  return <li className='Navbar-listItem'>
            <NavLink to={`/user/${userData.id}`}
                     className='NavbarLink'
                     activeClassName='NavbarLink_active'>
                {userData.name}
            </NavLink>
        </li>
};

const Navbar = () => {
    const usersAccounts = useSelector(selectTypedUsers);

    const navbarItems = usersAccounts.map(user =>
        <NabBarItem key={user.id} userData={user} />)
    return (
        <>
            {usersAccounts.length > 0 &&
            <nav className='Navbar'>
                <ul className='Navbar-list'>
                    {navbarItems}
                </ul>
            </nav>
            }
        </>
    );
};

export default Navbar;