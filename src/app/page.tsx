import A from '@/components/ui/A';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import { Project, Projects } from '@/data/projects';
import React, { useMemo } from 'react';
import Markdown from 'react-markdown';
import emailPng from '@/assets/email.png';
import { useMediaQuery } from 'react-responsive';
import LiveAge from '@/components/LiveAge';

export default function Home() {
  return (
    <>
      <Heading>ABOUT ME</Heading>
      <p className="max-w-prose mb-3">
        Hi! I'm a <LiveAge /> year old programmer from Romania. I work as a Full
        Stack Developer at <A href="https://tapptitude.com">Tapptitude</A>, and
        outside of work I create whatever idea I find interesting or funny.
      </p>
      <p className="max-w-prose mb-3">
        My design skills are sub-par. But my frontend & backend skills are{' '}
        <span className="rainbow">unmatched</span> :D
      </p>
      <p className="max-w-prose mb-3">
        I will successfully and singlehandedly transform a design into a thing
        you can click and interact with. With enough time.
      </p>
      <p className="max-w-prose mb-16">
        Knowledgeable with Node, React, Angular, NestJS, NextJS, AWS,
        DigitalOcean, Terraform, Postman, GitHub, Bitbucket, Mongo DB, MySQL,
        PHP, Nginx, Apache. Open to new things.{' '}
        <span className="text-gray-400 italic">but not Java...</span>
      </p>
      <Heading id="projects" className="text-4xl mb-5">
        PROJECTS
      </Heading>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
        {Projects.map((project) => (
          <div
            key={project.id}
            className="border rounded border-sky-200 flex flex-col"
          >
            {project.imageUrl && (
              <div className="relative border-b border-sky-200 bg-sky-700">
                <img
                  className="rounded-t mx-auto max-h-[24rem]"
                  src={project.imageUrl}
                />
                <div className="absolute right-0 left-0 bottom-0 text-right bg-gradient-to-t from-sky-700 via-sky-700 drop-shadow-lg pb-2 py-5 px-3">
                  {project.title}
                </div>
              </div>
            )}
            {!project.imageUrl && (
              <div className="bg-sky-700 text-xl text-right border-b border-sky-200 rounded-t px-3 py-2">
                {project.title}
              </div>
            )}
            <div className="text-sm px-3 py-2 flex-1 flex flex-col justify-between">
              <Markdown className="markdown mb-2">
                {project.shortDescMarkdown}
              </Markdown>
              <div className="flex justify-between items-baseline">
                <div>
                  Published: {project.creationDate.format('YYYY-MM-DD')}
                </div>
                <Button type="a" href={'/projects/' + project.id}>
                  Read more
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className="border rounded border-sky-200 px-5 py-5 flex items-center justify-center text-center">
          and all the unpublished/unfinished projects...
        </div>
      </div>
      <Heading id="contact" className="text-4xl mb-3">
        CONTACT
      </Heading>
      <p className="max-w-prose mb-3">I am available on:</p>
      <ul className="list-disc ml-7">
        <li>Discord: laurcons</li>
        <li>
          Email: <img className="inline -mt-0.5" src={emailPng.src} />
        </li>
      </ul>
    </>
  );
}
