'use client';

import A from '@/components/ui/A';
import Heading from '@/components/ui/Heading';
import { Projects } from '@/data/projects';
import dayjs from 'dayjs';
import { useParams } from 'next/navigation';
import Markdown from 'react-markdown';

export function generateStaticParams() {
  return Projects.map((proj) => ({ id: proj.id }));
}

function TargetBlankA(props: JSX.IntrinsicElements['a']) {
  return <a target="_blank" {...props}></a>;
}

export default function ProjectId({ params }: { params: { id: string } }) {
  const project = Projects.find((pr) => pr.id === parseInt(params.id));

  if (!project) {
    return <>Project #{params.id} wasn't found.</>;
  }

  return (
    <>
      <Heading tag="h1" className="text-4xl mb-3">
        {project.title}
      </Heading>
      <div className="overflow-hidden">
        {project.imageUrl && (
          <div className="md:float-right mx-auto md:ml-4 mb-4">
            <img
              className="max-w-xs mx-auto border rounded-md"
              src={project.imageUrl}
            />
          </div>
        )}
        <Markdown className="markdown">{project.shortDescMarkdown}</Markdown>
        <hr className="mt-5 mb-1" />
        <div className="text-gray-500 mb-4">
          Published: {project.creationDate.format('YYYY-MM-DD')}
        </div>
        <div
          className={
            'overflow-hidden border rounded-md mb-4 ' +
            (project.imageUrl ? '' : 'md:float-right md:ml-4')
          }
        >
          <div className="px-3 py-2 border-b rounded-t-md bg-sky-800">
            Versions and Links
          </div>
          {project.versions.map((version, idx) => (
            <div
              className={
                'px-3 py-2' +
                (idx + 1 !== project.versions.length ? ' border-b' : '')
              }
            >
              {version.name}:{' '}
              {version.links
                .map((link) => (
                  <A href={link.url} target="_blank">
                    {link.title}
                  </A>
                ))
                // separate with slashes
                .reduce((prev, curr) => (
                  <>
                    {prev} {curr && <>/ {curr}</>}
                  </>
                ))}
              {version.releaseDate && (
                <span className="text-gray-500 ml-1">
                  ({version.releaseDate.format('YYYY-MM-DD')})
                </span>
              )}
            </div>
          ))}
        </div>
        {project.oldSiteLink && (
          <div className="inline-block text-white border rounded bg-red-900 px-3 py-2 mb-3">
            This is a{' '}
            {dayjs().get('year') - project.creationDate.get('year') + 1}
            -year old project ported from my old <em>ucoz.org</em> site.
            <br />
            It's already history, and the Young Me who wrote this has grown a
            lot since then.
            <br />
            Please take everything you read here with a grain of salt (and maybe
            some humor).
          </div>
        )}
        <Markdown className="markdown" components={{ a: TargetBlankA }}>
          {project.longDescMarkdown}
        </Markdown>
      </div>
    </>
  );
}
