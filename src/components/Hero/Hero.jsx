import React from 'react';
import avatar from '../../assets/images/Celestial.png';

const Hero = () => {

    return (
        <section className='flex flex-col md:flex-row items-center justify-center h-full py-10 mb-48 px-8 m-auto'> 
            <div className='md:pr-10 mb-10 md:mb-0 text-center md:text-left'>
                <h2 className='text-4xl md:text-5xl py-2 text-primary font-semibold'>Daniel Stephen Celestial</h2>
                <h3 className='text-lg md:text-xl pb-3 text-secondary'>Software Developer</h3>
                <p className='text-sm md:text-base py-5 leading-7 text-text'>I am a software developer with experience in web applications using various frameworks and technologies. I enjoy solving problems, learning new skills, and writing high-quality code that adheres to best practices and industry standards.</p>
                <div>
                    <a href='#projects'>
                        <button className="btn btn-outline btn-primary">Projects</button>
                    </a>
                </div>
            </div>
            <div className='p-4 md:p-8'>
                <img src={avatar} className="max-w-64 sm:max-w-72 md:max-w-80 lg:max-w-md rounded-full shadow-2xl" />
            </div>
        </section>
    )
}

export default Hero