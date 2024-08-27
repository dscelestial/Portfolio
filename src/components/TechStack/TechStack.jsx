import React from 'react';
import reactsvg from '../../assets/svg/react.svg';
import htmlsvg from '../../assets/svg/html.svg';
import csssvg from '../../assets/svg/css.svg';
import javascriptsvg from '../../assets/svg/javascript.svg';
import bootstrapsvg from '../../assets/svg/bootstrap.svg';
import tailwindsvg from '../../assets/svg/tailwind.svg';
import laravelsvg from '../../assets/svg/laravel.svg';
import phpsvg from '../../assets/svg/php.svg';
import javasvg from '../../assets/svg/java.svg';
import wordpresssvg from '../../assets/svg/wordpress.svg';
import mysqlsvg from '../../assets/svg/mysql.svg';
import gitsvg from '../../assets/svg/git.svg';
import githubsvg from '../../assets/svg/github.svg';
import filezillasvg from '../../assets/svg/filezilla.svg';

const TechStack = () => {
    return (
        <div className='my-10 h-full py-10 mx-0 sm:mx-3 md:mx-5'>
            <div className='text-center text-4xl md:text-4xl font-bold text-secondary mt-4 mb-8 md:mb-12 py-4'>
                <h1>Technology Stack</h1>
            </div>

            <section className='flex flex-col md:flex-row items-center justify-center'>
                {/* Front End Card */}
                <div className='p-2 mx-4 rounded-lg bg-card shadow-lg w-1/3'>
                    <h1 className='text-xl text-center font-bold text-white py-4 '>Front End</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={reactsvg} alt="REACT SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                React
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={htmlsvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                HTML5
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={csssvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                CSS
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={javascriptsvg} alt="REACT SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                JavaScript
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={bootstrapsvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Bootstrap
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={tailwindsvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Tailwind CSS
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back End Card */}
                <div className='p-2 mx-4 rounded-lg bg-card shadow-lg w-1/3'>
                    <h1 className='text-xl text-center font-bold text-white py-4 '>Back End</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={phpsvg} alt="REACT SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                PHP
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={javasvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Java
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={javascriptsvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Javascript
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={laravelsvg} alt="REACT SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Laravel
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={mysqlsvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                MySql
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Card */}
                <div className='p-2 mx-4 rounded-lg bg-card shadow-lg w-1/3'>
                    <h1 className='text-xl text-center font-bold text-white py-4 '>Others</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={gitsvg} alt="REACT SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Git
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={githubsvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Github
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={wordpresssvg} alt="Another SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                WordPress
                            </div>
                        </div>

                        <div className='relative group cursor-pointer rounded-md py-4 px-4 flex items-center justify-center'>
                            <img src={filezillasvg} alt="REACT SVG" width={70} height={70} className='transition-opacity duration-300 group-hover:opacity-0'/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                FileZilla
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechStack