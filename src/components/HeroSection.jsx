import React from 'react'
import './HeroSection.css'
import { BsGithub } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';


const HeroSection = () => {
    return (
        <div className='hero-inside'>
            <div className="my-img">
                <img src="/images/MyImg.png" alt="" />
            </div>

            <div className="txt-btn-container">
                <h1>ISHA PALIWAL</h1>
                <p className='intro'>Welcome to my portfolio.I invite you to explore my site to get a better understanding of my specialties, technique and professional experience. What you'll find below is some personal passion projects of my own.
                    Enjoy browsing, and get in touch with any questions.</p>
                <div className="btn-icons">
                    <a href="#contact">
                        <button type='button' className='contact-btn'>Contact Me</button>
                    </a>
                    <div className="git-in-container">
                        <div>
                            <a href="https://github.com/isha-paliwal3">
                                <BsGithub className='brands'/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/isha-paliwal-165676222">
                                <ImLinkedin2 className='brands'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
