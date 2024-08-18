import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "My Portolfio",
        image: "/src/assets/projectimages/col.png",
    },
    {
        id: 2,
        title: "Laravel Twitter Clone",
        description: "Laravel",
        image: "/src/assets/projectimages/1.png",
    },
    {
        id: 3,
        title: "Chess",
        description: "Java OOP",
        image: "/src/assets/projectimages/2.png",
    },
];

const Projects = () => {
    return (
        <div className='mb-48'>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mt-4 mb-6 md:mb-8" id='projects'>Projects</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map( (project) => (
                    <ProjectCard
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects