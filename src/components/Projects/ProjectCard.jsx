import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, githubUrl }) => {
    return (
        <div>
            <div className="relative group h-52 md:h-64 rounded-xl overflow-hidden">
                <img
                    src={imgUrl}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full rounded-xl bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-4xl" />
                    </a>
                </div>
            </div>
            <div className="rounded-b-xl mt-3 py-6 px-4">
                <h5 className="text-xl font-semibold mb-2 text-secondary">{title}</h5>
                <p className="text-text">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
