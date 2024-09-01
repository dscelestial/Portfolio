import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from './projectsData'

const Projects = () => {
    return (
        <section className='my-12 py-12 px-4'>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mt-4 mb-8 md:mb-12 py-4" id='projects'>Projects</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map( (project) => (
                    <ProjectCard
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects