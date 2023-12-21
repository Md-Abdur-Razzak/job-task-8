import React from 'react';
import Navbar from '../Home/Navbar';
import { Outlet } from 'react-router-dom';

const MainContainer = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainContainer;