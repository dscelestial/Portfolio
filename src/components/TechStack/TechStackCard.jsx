import React from 'react';

const TechStackCard = ({ name, image }) => {
    return (
        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
            <img src={image} alt="REACT SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {name}
            </div>
        </div>
    )
}

export default TechStackCard