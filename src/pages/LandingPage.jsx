import React from 'react'
import AboutSection from '../components/AboutSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import './landingPage.css'
import {AiTwotoneHeart} from 'react-icons/ai'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div id="home">
                <HeroSection />
            </div>
            <div className="shape-divider hide">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>     
            <div className="main-body">
            <div id="about">
                <AboutSection/>
            </div>
            </div>
            <div className="footer">
                <p>© Crafted and handcoded with <AiTwotoneHeart/> by Isha Paliwal | @{new Date().getFullYear()}</p>
            </div>
        </>
    )
}

export default LandingPage
