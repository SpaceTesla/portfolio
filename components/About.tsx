import Link from 'next/link';
import Image from 'next/image';
import about from '@/data/about';

const Hero = () => {
  return (
    <div className='hero bg-base-100 min-h-screen text-base-content'>
      <div className='hero-content flex-col lg:flex-row-reverse justify-between w-full'>
        <Image
          src='/profile.jpg'
          alt='Shivansh Karan'
          width={280}
          height={280}
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>{about.name}</h1>
          <p className='py-6 max-w-[52rem]'>{about.description}</p>
          <Link className='btn btn-outline btn-info' href={'/resume.pdf'}>
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
