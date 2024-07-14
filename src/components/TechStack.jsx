import React from 'react';
import reactsvg from '../assets/svg/react.svg';
import htmlsvg from '../assets/svg/html.svg';
import csssvg from '../assets/svg/css.svg';
import javascriptsvg from '../assets/svg/javascript.svg';
import bootstrapsvg from '../assets/svg/bootstrap.svg';
import tailwindsvg from '../assets/svg/tailwind.svg';
import laravelsvg from '../assets/svg/laravel.svg';
import phpsvg from '../assets/svg/php.svg';
import javasvg from '../assets/svg/java.svg';
import wordpresssvg from '../assets/svg/wordpress.svg';
import mysqlsvg from '../assets/svg/mysql.svg';
import gitsvg from '../assets/svg/git.svg';

const TechStack = () => {
    return (
        <div className='my-10 h-full py-10 mx-0 sm:mx-3 md:mx-5'>
            <div className='text-center text-4xl md:text-4xl font-bold text-secondary mt-4 mb-8 md:mb-12 py-4'>
                <h1>Technology Stack</h1>
            </div>

            <section className='flex flex-col md:flex-row items-center justify-center'>
                <div className='p-2 mx-2 rounded-lg bg-card shadow-lg w-1/3'>
                    <h1 className='text-xl text-center font-bold text-secondary py-4 '>Front End</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={reactsvg} alt="REACT SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                React
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={reactsvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Another Tech
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={reactsvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Another Tech
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-2 mx-3 rounded-lg bg-card shadow-lg w-1/3'>
                    <h1 className='py-4'>Front End</h1>
                        <div className='relative group cursor-pointer rounded-md py-4 px-4 mr-4'>
                            <img src={reactsvg} alt="REACT SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                React
                            </div>
                        </div>
                </div>

                <div className='p-2 mx-2 rounded-lg bg-card shadow-lg w-1/3'>
                    <h1 className='py-4'>Front End</h1>
                        <div className='relative group cursor-pointer rounded-md py-4 px-4 mr-4'>
                            <img src={reactsvg} alt="REACT SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                React
                            </div>
                        </div>
                </div>
            </section>
            


            

        </div>
        
    )
}

export default TechStack

{/* <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={htmlsvg} alt="REACT SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Html
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={csssvg} alt="Css SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Css
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={javascriptsvg} alt="Javascript SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Javascript
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={bootstrapsvg} alt="Bootstrap SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Bootstrap
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={tailwindsvg} alt="Tailwind SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Tailwind
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={laravelsvg} alt="Laravel SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Laravel
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={phpsvg} alt="Php SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Php
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={javasvg} alt="Java SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Java
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={wordpresssvg} alt="Wordpress SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Wordpress
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={mysqlsvg} alt="MySql SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        MySql
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-4'>
                    <img src={gitsvg} alt="Git SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Git
                    </div>
                </div> */}