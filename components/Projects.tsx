'use client';

import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <section id='projects' className='py-20 bg-base-200 text-base-content'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>
        <ProjectCards />
      </div>
    </section>
  );
};

export default Projects;
