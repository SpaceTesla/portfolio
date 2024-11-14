import Image from 'next/image';
import Link from 'next/link';

import projects from '@/data/projects';

const ProjectCards = () => {
  return (
    <div className='projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {projects.map((project) => (
        <div key={project.name} className='card bg-base-100 w-96 shadow-xl'>
          <figure>
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={300}
              className='object-cover h-56'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{project.name}</h2>
            <p>{project.text}</p>
            <div className='card-actions justify-between pt-4'>
              <Link
                href={project.demo}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary'
              >
                Demo
              </Link>
              <Link
                href={project.code}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary'
              >
                Code
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
