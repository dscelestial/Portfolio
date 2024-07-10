import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import avatar from '../assets/images/avatar.jpg';


    

const AboutMe = () => {

    return (
        <div className='flex flex-col md:flex-row items-center justify-center h-full py-10 mb-48 px-4 md:px-0 m-auto'> 
            <div className='md:pr-10 mb-10 md:mb-0 text-center md:text-left'>
                <h2 className='text-3xl md:text-4xl py-2 text-teal-600 font-semibold'>Daniel Stephen Celestial</h2>
                <h3 className='text-lg md:text-xl py-1'>Software Developer</h3>
                <p className='text-sm md:text-md py-5 leading-6 text-gray-800'>I am a software developer with experience in full-stack web development. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.</p>
                <div>
                    {/* <button onClick={() => scrollToSection('projects')} className="btn btn-outline btn-secondary">Projects</button> */}
                    <a href='#projects'>
                        <button className="btn btn-outline btn-secondary">Projects</button>
                    </a>
                </div>
            </div>
            <div className='p-4 md:p-10'>
                <img src={avatar} className="max-w-xs md:max-w-sm rounded-full shadow-2xl" />
            </div>
        </div>
    )
}

export default AboutMe

{/* <div  className=' bg-gray-600 text-4xl'>
                <a href='https://www.facebook.com/dsCelestial'> <AiFillFacebook /> </a>
                <a href='https://www.instagram.com/dscelestial/'> <AiFillInstagram /> </a>
                <a href='https://www.linkedin.com/in/dscelestial/'> <AiFillLinkedin /> </a>
                <a href='https://github.com/dscelestial'> <AiFillGithub /> </a>
</div> */}