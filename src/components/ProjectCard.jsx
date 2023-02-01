import React from 'react'
import { BsGithub } from 'react-icons/bs';
import pr1 from '../asset/pr1.jpg';
import pr2 from '../asset/pr2.jpg';
import pr3 from '../asset/pr3.jpg';
import pr4 from '../asset/pr4.jpg';
import pr5 from '../asset/pr5.jpg';
import pr6 from '../asset/pr6.jpg';

const Projects = [
    {
        id: 1,
        img: pr1,
        name: "Verification Module",
        desc: "An automated dashboard for the college officials to track and approve validation requests of student documents by third party companies and implement remaining features under one published and protected web framework.",
        link: "https://document-verification-mitwpu.netlify.app/",
    },
    {
        id: 2,
        img: pr2,
        name: "Ecommerce Website",
        desc: "A fully functional ecommerce website frontend made with react, react hooks and context Api",
        link: "https://apnastore-ecommerce.netlify.app/",
    },
    {
        id: 3,
        img: pr3,
        name: "Netflix Clone",
        desc: "",
        link:"https://netflix-clone-03.netlify.app/",
    },
    {
        id: 4,
        img: pr4,
        name: "Blackjack Game",
        desc: "It is a slight cariation of the classic card game The Blackjack made using JavaScript.",
        link:"https://the-blackjack-game.netlify.app/",
    },
    {
        id: 5,
        img: pr5,
        name: "Indian Hyperloop Committee",
        desc: "It is a slight cariation of the classic card game The Blackjack made using JavaScript.",
        link:"https://indianhyperloopcommittee.com/",
    },
    {
        id: 6,
        img: pr6,
        name: "Jouls.energy",
        desc: "It is a slight cariation of the classic card game The Blackjack made using JavaScript.",
        link:"https://jouls.energy/",
    },

]

const ProjectList = props => {
    return (
        <>
            <div className="project">
                <div className="project-img-container">
                    <img src={props.project.img} alt="project-blackjack" />
                </div>
                <div className="txt-btn">
                    <div className="txt-container">
                        <h4>{props.project.name}</h4>
                        <p>{props.project.desc}</p>

                    </div>
                    <div className="btn-container">
                        <a href={props.project.link}><button className='demo'>Demo</button></a>
                        <a href="#"><button className='code'><BsGithub className='github' />Code</button></a>
                    </div>
                </div>
            </div>
        </>
    );
};


const ProjectCard = () => {
    return (
        <div className="flex">
            {Projects.map(project => {
                return < ProjectList project={project} key={project.id} />;
            })}
        </div>
    )
}

export default ProjectCard
