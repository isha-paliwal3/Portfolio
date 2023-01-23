import './AboutSection.css'
import { MdDownload } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'

const AboutSection = () => {
    return (
        <div className='about-section'>
            <div className="about-img">
                <img src="" alt="" />
            </div>
            <div className="about-info">
                <h1>About Me</h1>
                <p>
                    Hi! My name is Isha and I am a computer science engineering student currently in third year at MIT WPU, Pune.I am a full-stack web developer with a passion for creating beautiful, usable interfaces.
                </p>
                <p>
                    I've worked on a range of projects ranging from WordPress websites, to building custom-made apps using JavaScript, React.js, mongodb and NodeJs.
                </p>
                <p>Working with me - you will recieve quality work from me. If you want someone to help you out to bring your ideas to life, just drop in a message.</p>
                <div className="abt-btn-container">
                    <a href="#about"><button className='abt-btn'><MdDownload className='abt-icon' />Grab Resume</button></a>
                    <a href="#about"><button className='abt-btn'><IoMdCall className='abt-icon' />Contact Me</button></a>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
