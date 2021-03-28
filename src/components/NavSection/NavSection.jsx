import React from 'react';
import Navbar from '../Navbar/Navbar';
import './NavSection.css';

const NavSection = () => {
    return (
        <div className='NavSection'>
            <h1 className='NavSection-title'>Application Task for React JS Develover</h1>
            <p className='NavSection-subtitle'>Gleb Gaiduk | Poland, Poznan</p>
            <Navbar />
        </div>
    );
};

export default NavSection;