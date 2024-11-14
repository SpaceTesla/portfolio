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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Code, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function BlockPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <header className='fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-90 backdrop-blur-sm'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <Link href='/' className='text-2xl font-bold'>
            JD
          </Link>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <Link href='#about' className='hover:text-gray-300'>
                  About
                </Link>
              </li>
              <li>
                <Link href='#projects' className='hover:text-gray-300'>
                  Projects
                </Link>
              </li>
              <li>
                <Link href='#skills' className='hover:text-gray-300'>
                  Skills
                </Link>
              </li>
              <li>
                <Link href='#contact' className='hover:text-gray-300'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className='pt-16'>
        <section
          id='about'
          className='py-20 bg-gradient-to-b from-gray-900 to-black'
        >
          <div className='container mx-auto px-4 text-center'>
            <h1 className='text-5xl font-bold mb-4'>John Doe</h1>
            <p className='text-xl mb-8'>Full Stack Web Developer</p>
            <p className='max-w-2xl mx-auto mb-8'>
              I'm passionate about creating beautiful, functional, and
              user-friendly websites and applications. With expertise in both
              front-end and back-end technologies, I bring ideas to life in the
              digital world.
            </p>
            <div className='flex justify-center space-x-4'>
              <Button variant='outline' size='icon'>
                <Link
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='h-5 w-5' />
                  <span className='sr-only'>GitHub</span>
                </Link>
              </Button>
              <Button variant='outline' size='icon'>
                <Link
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='h-5 w-5' />
                  <span className='sr-only'>LinkedIn</span>
                </Link>
              </Button>
              <Button variant='outline' size='icon'>
                <Link
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Twitter className='h-5 w-5' />
                  <span className='sr-only'>Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id='projects' className='py-20 bg-gray-900'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[1, 2, 3].map((project) => (
                <Card key={project} className='bg-gray-800 border-gray-700'>
                  <CardHeader>
                    <CardTitle>Project {project}</CardTitle>
                    <CardDescription>
                      A short description of the project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='aspect-video bg-gray-700 rounded-md mb-4'></div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </CardContent>
                  <CardFooter className='flex justify-between'>
                    <Button variant='outline' size='sm'>
                      <Link href='#' target='_blank' rel='noopener noreferrer'>
                        Demo
                      </Link>
                    </Button>
                    <Button variant='outline' size='sm'>
                      <Link href='#' target='_blank' rel='noopener noreferrer'>
                        Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id='skills' className='py-20 bg-black'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>Skills</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {[
                'JavaScript',
                'React',
                'Node.js',
                'Next.js',
                'TypeScript',
                'HTML',
                'CSS',
                'Git',
                'MongoDB',
                'SQL',
                'GraphQL',
                'Docker',
              ].map((skill) => (
                <Card key={skill} className='bg-gray-800 border-gray-700'>
                  <CardContent className='flex items-center justify-center p-4'>
                    <Code className='mr-2 h-5 w-5' />
                    <span>{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id='contact' className='py-20 bg-gray-900'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>Contact Me</h2>
            <Card className='max-w-md mx-auto bg-gray-800 border-gray-700'>
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
                <CardDescription>
                  Fill out the form below to send me a message.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className='space-y-4'>
                  <div>
                    <label htmlFor='name' className='block mb-2'>
                      Name
                    </label>
                    <Input
                      id='name'
                      placeholder='Your name'
                      className='bg-gray-700 border-gray-600'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block mb-2'>
                      Email
                    </label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Your email'
                      className='bg-gray-700 border-gray-600'
                    />
                  </div>
                  <div>
                    <label htmlFor='message' className='block mb-2'>
                      Message
                    </label>
                    <Textarea
                      id='message'
                      placeholder='Your message'
                      className='bg-gray-700 border-gray-600'
                    />
                  </div>
                  <Button className='w-full'>Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className='bg-gray-900 py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p>
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
