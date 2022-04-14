import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

const Navbar = styled(() => {
    return (
        <div className='nav'>
            <div className='navTitle'>
                Rico&apos;s Foundation<img src="logo_resize.jpeg" alt="Logo" />
            </div>
            <div className='navLinks'>
                {MenuItems.map((item, index) => {
                    return (
                        <span key={index}>
                            <Link to={item.url} className='link'>{item.title}</Link>
                        </span>
                    )
                })
                }
            </div>
        </div>
    );
})``;

export default Navbar;
