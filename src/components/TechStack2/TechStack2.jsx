import React from 'react';
import TechStackCard from './TechStackCard';
import frontEnd from './frontEnd';
import backEnd from './backEnd';
import others from './others';

const TechStack2 = () => {
  return (
    <section className='px-4 py-8'>
      <h1 className='text-center text-3xl md:text-4xl font-bold text-secondary mt-4 mb-8 md:mb-12 py-4'>Technology Stack</h1>

      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6'>
        {/* FRONT END */}
        <div className='p-4 mx-2 rounded-lg bg-card shadow-lg w-full md:w-2/3 lg:w-1/3'>
          <h1 className='text-xl text-center font-bold text-white py-4'>Front End</h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {frontEnd.map((fe) => (
              <TechStackCard
                key={fe.id}
                name={fe.name}
                image={fe.image}
              />
            ))}
          </div>
        </div>

        {/* BACK END */}
        <div className='p-4 mx-2 rounded-lg bg-card shadow-lg w-full md:w-2/3 lg:w-1/3'>
          <h1 className='text-xl text-center font-bold text-white py-4'>Back End</h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {backEnd.map((be) => (
              <TechStackCard
                key={be.id}
                name={be.name}
                image={be.image}
              />
            ))}
          </div>
        </div>

        {/* OTHERS */}
        <div className='p-4 mx-2 rounded-lg bg-card shadow-lg w-full md:w-2/3 lg:w-1/3'>
          <h1 className='text-xl text-center font-bold text-white py-4'>Others</h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {others.map((other) => (
              <TechStackCard
                key={other.id}
                name={other.name}
                image={other.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack2