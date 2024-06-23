import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "My Portolfio",
        image: "/src/assets/projectimages/portfolio.png",
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "Laravel Twitter Clone",
        description: "Laravel",
        image: "/src/assets/projectimages/portfolio.png",
        tag: ["All", "Web"],
    },
    {
        id: 3,
        title: "Chess",
        description: "Java OOP",
        image: "/src/assets/projectimages/portfolio.png",
        tag: ["All", "Web"],
    },
];

const Projects = () => {
    return (
        <div>
            <h2>My Project</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map( (project) => (
                    <ProjectCard
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        tags={project}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects