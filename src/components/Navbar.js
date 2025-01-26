import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';
import logo from "../img/logo.png"; // Import du logo

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: 'portfolio',
        active: 'portfolio'
    }
]

// Fonction pour le scroll avec décalage de la navbar
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default function Navbar({ darkMode, handleClick, active, setActive }) {

    return (
        <Box component={'nav'} width={'100%'} position={singlePage ? 'fixed' : 'relative'} 
             className={darkMode ? Style.dark : Style.light}>
            <Box 
                component={'ul'} 
                display={'flex'} 
                justifyContent={'center'} 
                alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                textTransform={'lowercase'} 
                fontSize={'1rem'}
            >
                {links.map((link, index) => (
                    <Box 
                        key={index} 
                        component={'li'} 
                        className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}
                    >
                        <Link 
                            to={singlePage ? `#${link.to}` : `/${link.to}`}
                            scroll={el => scrollWidthOffset(el)}
                            smooth
                            onClick={() => setActive(link.active)} 
                            className={Style.link}
                        >
                            {/* Condition pour afficher soit un texte, soit le logo */}
                            {link.type === 'initials' ? (
                                <img 
                                    src={logo} 
                                    alt="Logo" 
                                    style={{ height: '40px', width: 'auto' }} 
                                />
                            ) : (
                                <p style={{ padding: '0.5rem 0' }}>{link.name}</p>
                            )}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    )
}
