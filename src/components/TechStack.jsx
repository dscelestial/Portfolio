import React from 'react';
import reactsvg from '../assets/svg/react.svg';
import htmlsvg from '../assets/svg/html.svg';
import csssvg from '../assets/svg/css.svg';
import javascriptsvg from '../assets/svg/javascript.svg';

const TechStack = () => {
    return (
        <div>
            <div className='py-4'>
                <h1>Technology Stack</h1>
            </div>
            <div className='flex'>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-2'>
                    <img src={reactsvg} alt="REACT SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        React
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-2'>
                    <img src={htmlsvg} alt="REACT SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Html
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-2'>
                    <img src={csssvg} alt="REACT SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Css
                    </div>
                </div>
                <div className='relative group cursor-pointer bg-slate-500 rounded-md py-4 px-4 mr-2'>
                    <img src={javascriptsvg} alt="REACT SVG" width={60} height={60} className='transition-opacity duration-300 group-hover:opacity-0'/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Javascript
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TechStack