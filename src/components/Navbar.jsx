import React, { useState } from 'react'
import { CgMenu, CgClose } from 'react-icons/cg'
import "./Navbar.css"

const Navbar = () => {

    const [menuIcon, setMenuIcon] = useState(false);
    return (
        <div className="header">
            <nav id="navbar" className={menuIcon ? "navbar active" : "navbar"}>
                <div className="nav-wrapper">
                    <div className="logo">
                        <a href="#home">Isha Paliwal</a>
                    </div>

                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="mobile-navbar-btn">
                        <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setMenuIcon(true)} />
                        <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={() => setMenuIcon(false)} />
                    </div>
                </div>
            </nav>
            <div className='overlay-menu' style={{display: menuIcon ? "flex" : "none"}}>
                <ul id="menu">
                    <li><a href="#home" onClick={() => setMenuIcon(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMenuIcon(false)}>About</a></li>
                    <li><a href="#portfolio" onClick={() => setMenuIcon(false)}>Portfolio</a></li>
                    <li><a href="#resume" onClick={() => setMenuIcon(false)}>Resume</a></li>
                    <li><a href="#contact" onClick={() => setMenuIcon(false)}>Contact</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
