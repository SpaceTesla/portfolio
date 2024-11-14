import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';

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
          <h1 className='text-5xl font-bold'>Shivansh Karan</h1>
          <p className='py-6 max-w-[52rem]'>
            I'm a passionate developer specializing in creating sleek,
            intuitive, and scalable web solutions. With a deep-rooted interest
            in full-stack development, cloud engineering, and DevOps, I bring a
            blend of technical expertise and creativity to every project. My
            skills extend across JavaScript, Python, and Go, and I aim to write
            clean, efficient code that makes a difference. I'm on a journey to
            become a 10x developer and am always excited to explore cutting-edge
            technologies to push my projects forward. Whether I'm working on a
            new web app, a cloud deployment pipeline, or learning about emerging
            tech, I'm driven by the goal of building impactful solutions.
          </p>
          <Link className='btn btn-outline btn-info' href={'/resume.pdf'}>
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
