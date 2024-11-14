'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

import projects from '@/data/projects';
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
