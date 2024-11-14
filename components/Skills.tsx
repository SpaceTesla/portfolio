import { Code } from 'lucide-react';

import skills from '@/data/skills';

const Skills = () => {
  return (
    <section id='skills' className='py-20 bg-base-100 text-base-content'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Skills</h2>
        <div className='skills grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {skills.map((skill) => (
            <div key={skill} className='btn bg-base-300'>
              <Code className='mr-2 h-5 w-5' />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
