import './Portfolio.css'
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    return (
        <div className='portfolio-section'>
            <div className="project-head">
                <h1>My Portfolio</h1>
            </div>
            <ProjectCard/>
        </div>
    )
}

export default Portfolio
