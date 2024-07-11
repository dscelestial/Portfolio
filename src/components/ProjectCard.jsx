import React from 'react'

const ProjectCard = ({ imgUrl, title, description }) => {
    return (
        <div>
            <div
                className="h-52 md:h-64 rounded-xl relative group bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${imgUrl})` }}
                >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                </div>
            </div>
            <div className="rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2 text-secondary">{title}</h5>
                <p className="text-text">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard