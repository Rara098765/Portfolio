import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Sport KG",
            image: "/images/SportKG.png", 
            link: "https://sportkg-rara098765s-projects.vercel.app/"
        },
        {
            id: 2,
            title: "MNTN",
            image: "/images/MNTN.jpg",
            link: "https://github.com/Rara098765/MNTN"
        },
        {
            id: 3,
            title: "Cafe Street",
            image: "/images/cafe.png",
            link: "https://cafe-street-flax.vercel.app/"
        },
        {
            id: 4,
            title: "Total Parts",
            image: "/images/SportKG.png",
            link: "https://github.com/ulukbek200/TotalParts"
        },
    ];

    return (
        <div className="projects-container">
            {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="project-image"
                    />
                    <h3 className="project-title">{project.title}</h3>
                    <a 
                        href={project.link} 
                        className="project-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;