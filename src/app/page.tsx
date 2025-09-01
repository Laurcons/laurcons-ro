import me from '@/assets/me.png';
import LiveAge from '@/components/LiveAge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import ImageCard from '@/components/ui/ImageCard';
import { FeaturedRepositories } from '@/data/featured-repositories';
import { getRepositoryInfo } from '@/lib/github-api';
import { BrandGithub, BrandLinkedin, Star } from '@mynaui/icons-react';
import ExportedImage from 'next-image-export-optimizer';

export default async function Home() {
  const featuredRepositories = await Promise.all(
    FeaturedRepositories.map(async (repository) => ({
      github: await getRepositoryInfo(repository.owner ?? 'laurcons', repository.name),
      data: repository,
    })),
  );
  return (
    <>
      <div className="flex justify-center md:items-center mt-3 md:mt-0 md:h-[85vh]">
        <Card className="md:w-5xl xs:w-xs sm:w-sm md:max-w-none mx-2">
          <CardContent>
            <div className="flex flex-col md:flex-row gap-7">
              <div className="flex flex-row md:flex-col justify-center">
                <ImageCard Image={<ExportedImage src={me} alt="Me" width={200} height={200} />} />
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-self-stretch">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-1">Laurențiu Pricop</h1>
                  <p className="text-gray-500">Full Stack & DevOps Engineer</p>
                </div>
                <div className="flex-1 flex gap-3 justify-center">
                  <Button asChild>
                    <a href="https://www.linkedin.com/in/laurcons/" target="_blank">
                      <BrandLinkedin /> LinkedIn
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="https://github.com/laurcons" target="_blank">
                      <BrandGithub /> GitHub
                    </a>
                  </Button>
                </div>
                <div className="w-full">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>About me</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">
                          Hi! I'm a <LiveAge /> year old Full Stack & DevOps Engineer from Romania. I currently work at
                          Tapptitude, in Cluj-Napoca, and outside of work I create whatever idea I find interesting or
                          funny.
                        </p>
                        <p className="mb-4">
                          I excel with backend infrastructure and design, as well as creating user-friendly and
                          performant frontends.
                        </p>
                        <p className="mb-4">
                          Knowledgeable with Node, React, Angular, NestJS, NextJS, AWS, DigitalOcean, Terraform,
                          Postman, GitHub, Bitbucket, Mongo DB, MySQL, PHP, Nginx, Apache.
                        </p>
                        <p className="">
                          Open to new things. <span className="text-gray-500">but not Java...</span>
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mx-2">
        <h1 className="text-4xl font-bold text-center md:mb-10 mb-5 mt-10 md:mt-0">Featured Repositories</h1>
        <div className="flex flex-col lg:w-4xl gap-4 mx-auto">
          {featuredRepositories.map(({ github: repository, data }) => (
            <Card key={repository.name}>
              <CardContent>
                <div className="float-end gap-2 hidden md:flex">
                  {repository.stargazers_count > 0 && (
                    <Button size="sm" variant="neutral">
                      <Star className="inline-block" /> {repository.stargazers_count}
                    </Button>
                  )}
                  <Button size="sm" variant="default" asChild>
                    <a href={repository.html_url} target="_blank">
                      <BrandGithub /> View on GitHub
                    </a>
                  </Button>
                </div>
                <CardTitle className="mb-2 flex flex-col md:flex-row items-baseline">
                  <div className="mb-2 md:mb-0">
                    {repository.owner.login}/{repository.name}
                  </div>
                  <div className="">
                    <Badge className="md:ms-4">{repository.language}</Badge>
                    {data.tags?.map((tag) => (
                      <Badge key={tag} variant="neutral" className="ms-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardTitle>
                <p>{data.description ?? repository.description}</p>
                <div className="mt-3 gap-2 flex md:hidden sm:w-sm mx-auto">
                  {repository.stargazers_count > 0 && (
                    <Button size="sm" variant="neutral">
                      <Star className="inline-block" /> {repository.stargazers_count}
                    </Button>
                  )}
                  <Button className="flex-1" size="sm" variant="default" asChild>
                    <a href={repository.html_url} target="_blank">
                      <BrandGithub /> View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
}
