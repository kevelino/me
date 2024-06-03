/* eslint-disable */
import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { Link as NextLink } from '@nextui-org/link';
import { Divider } from '@nextui-org/divider';
import { Button } from '@nextui-org/button';
import { Progress } from '@nextui-org/progress';

import BannerImage from '@/public/web-development.png';
import MyImage from '@/public/image.png';
import Project1 from '@/public/project-01.png';
import Project2 from '@/public/project-02.png';
import Project3 from '@/public/project-03.png';
import Project4 from '@/public/project-04.png';
import Transition from '@/components/transition';
import { ContactForm } from '@/components/contact';

export default function Home() {
  return (
    <section className="py-2">
      <Transition>
        <div className="flex flex-col mb-6">
          <div className="flex items-center justify-center md:my-3">
            <Image
              alt="Banner Image"
              className="w-24 md:w-48"
              src={BannerImage}
              width={800}
            />
          </div>
          <div className="flex justify-center md:my-2">
            <div className="text-center">
              <h1 className="md:text-7xl text-5xl font-bold uppercase">
                Hi, I&apos;m Kevelino
              </h1>
              <p className="md:text-xl text-medium my-4">
                Passionate and curious, I&apos;m a versatile web developer always on
                the lookout for new challenges. With a creative and analytical
                mind, I thrive on solving complex problems and developing
                innovative solutions.
              </p>
            </div>
          </div>
          <div className="flex py-4 justify-center items-center">
            <div className="">
              <NextLink
                className="md:text-2xl text-xl font-semibold uppercase flex flex-col items-center"
                href="#about"
                id="go-to-about"
              >
                <p className='text-foreground'>About</p>
                <span>
                  <ArrowDownIcon className="md:w-5 w-4 text-foreground" />
                </span>
              </NextLink>
            </div>
          </div>
        </div>
      </Transition>
      <Transition>
        <div className="py-4 w-full" id="about">
          <div className="flex items-start justify-arround">
            <div className="hidden md:flex h-[32rem] w-2/5">
              <Image
                alt="About me Image"
                className="h-full w-full cursor-pointer"
                height={800}
                src={MyImage}
                width={800}
              />
            </div>
            <div className="flex py-2 justify-end md:w-3/5 w-full">
              <div className="p-1 select-none">
                <h2 className="md:text-5xl text-3xl font-semibold w-full">
                  I&apos;m Kevelino, full-stak developer and I&apos;m delighted to welcome
                  you to my personal website profile.
                </h2>
                <Divider className="my-4" />
                <div className="">
                  <p className="md:text-xl text-lg">
                    I&apos;m passionate about technology and programming. From an
                    early age, I&apos;ve been drawn to the world of computing and
                    have spent a lot of time exploring its many facets.
                  </p>
                  <Divider className="my-4" />
                  <p className="md:text-xl text-lg">
                    My goal is to contribute to technological progress by
                    developing innovative solutions and sharing my knowledge
                    with the community. and sharing my knowledge with the
                    community. I firmly believe that technology can improve our
                    daily lives and solve some of the most pressing challenges
                    facing our society.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:pt-3 pb-8">
              <NextLink
                className="md:text-2xl text-xl font-semibold uppercase flex flex-col items-center"
                href="#skills"
                id="go-to-skills"
              >
                <p className='text-foreground'>Skills</p>
                <span>
                  <ArrowDownIcon className="md:w-5 w-4 text-foreground" />
                </span>
              </NextLink>
            </div>
          </div>
        </div>
      </Transition>
      <Transition>
        <div className="md:py-10  w-full" id="skills">
          <div className="flex justify-center items-center">
            <div className="md:w-2/4">
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    HTML
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    95%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="warning" value={95} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    CSS
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    90%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="primary" value={90} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    JavaSCript
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    85%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="success" value={85} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    PYTHON
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    80%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="danger" value={80} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    React
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    65%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="warning" value={65} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    GIT
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    80%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="primary" value={80} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    GitHub
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    86%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="success" value={86} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    GitLab
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    82%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="danger" value={82} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    Astro
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    74%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="warning" value={74} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    Django
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    88%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="primary" value={88} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    RestAPI
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    65%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="success" value={65} />
              </div>
              <div className="py-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold select-none text-clip">
                    Linux
                  </h2>
                  <h2 className="text-sm font-semibold select-none text-clip">
                    70%
                  </h2>
                </div>
                <Progress aria-label="Loading..." color="danger" value={70} />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:pt-3 pb-2">
              <NextLink
                className="md:text-2xl text-xl font-semibold uppercase flex flex-col items-center"
                href="#projects"
                id="go-to-projects"
              >
                <p className='text-foreground'>Projects</p>
                <span>
                  <ArrowDownIcon className="md:w-5 w-4 text-foreground" />
                </span>
              </NextLink>
            </div>
          </div>
        </div>
      </Transition>
      <Transition>
        <div className="md:py-6 py-2 flex justify-center w-full" id="projects">
          <div className="flex-flex-col w-4/5">
            <div className="md:flex justify-between md:py-12">
              <div className="md:w-3/5 w-full">
                <Image
                  alt="Project 1 Image"
                  className="md:w-[500px] w-[100px]"
                  src={Project1}
                  width={800}
                />
              </div>
              <div className="md:w-2/5 w-full py-6">
                <h2 className="text-2xl font-bold"> My Personnal Website </h2>
                <p className="text-lg py-4">
                  This website is intended to introduce myself, my work and the
                  various projects I&apos;ve worked on. To create it, I used
                  technologies such as{' '}
                  <NextLink href="https://react.dev" target="_blank">
                    React
                  </NextLink>
                  ,{' '}
                  <NextLink href="https://nextui.org/docs/" target="_blank">
                    NextUI
                  </NextLink>{' '}
                  and
                  <NextLink href="https://framer.com/motion">
                    Framer Motion
                  </NextLink>{' '}
                  .
                </p>
              </div>
            </div>
            <div className="md:flex justify-between md:py-12">
              <div className="md:w-3/5 w-full">
                <Image
                  alt="Project 1 Image"
                  className="md:w-[500px] w-[100px]"
                  src={Project2}
                  width={800}
                />
              </div>
              <div className="md:w-2/5 w-full py-6">
                <h2 className="text-2xl font-bold"> CFPTAC </h2>
                <p className="text-lg py-4">
                  This site was created during my internship with a company in
                  Douala, and was intended to improve the company&apos;s
                  visibility on social media. This site uses technologies such
                  as HTML, CSS JavaScript and the{' '}
                  <NextLink
                    href="https://www.djangoproject.com/"
                    target="_blank"
                  >
                    Django framework
                  </NextLink>{' '}
                  .
                </p>
                <Button
                  as={NextLink}
                  className="bg-blue-600 hover:bg-blue-800 transition-all duration-200 text-white text-lg"
                  href="https://www.cfptac.com"
                  target="_blank"
                  variant="solid"
                >
                  View Site
                </Button>
              </div>
            </div>
            <div className="md:flex justify-between md:py-12">
              <div className="md:w-3/5 w-full">
                <Image
                  alt="Project 1 Image"
                  className="md:w-[500px] w-[100px]"
                  src={Project3}
                  width={800}
                />
              </div>
              <div className="md:w-2/5 w-full py-6">
                <h2 className="text-2xl font-bold"> ABENZOU FOUNDATION </h2>
                <p className="text-lg py-4">
                  This site was also used during my internship for a company
                  that customizes vehicles and sells car parts.. This site uses
                  technologies such as HTML, CSS JavaScript and the{' '}
                  <NextLink
                    href="https://www.djangoproject.com"
                    target="_blank"
                  >
                    Django framework
                  </NextLink>{' '}
                  .
                </p>
                <Button
                  as={NextLink}
                  className="bg-blue-600 hover:bg-blue-800 transition-all duration-200 text-white text-lg"
                  href="https://www.abenzou.com"
                  target="_blank"
                  variant="solid"
                >
                  View Site
                </Button>
              </div>
            </div>
            <div className="md:flex justify-between md:py-12">
              <div className="md:w-3/5 w-full">
                <Image
                  alt="Project 1 Image"
                  className="md:w-[500px] w-[100px]"
                  src={Project4}
                  width={800}
                />
              </div>
              <div className="md:w-2/5 w-full py-1">
                <h2 className="text-2xl font-bold"> ETResS </h2>
                <p className="text-lg py-1">
                  ETResS is an online bus ticket booking platform in Cameroon, I
                  worked on this project for a long time with friends and it
                  finally saw the light of day in July 2024. This platform uses
                  several different technologies such as{' '}
                  <NextLink href="https://react.dev" target="_blank">
                    React
                  </NextLink>
                  ,{' '}
                  <NextLink
                    href="https://www.djangoproject.com"
                    target="_blank"
                  >
                    Django
                  </NextLink>
                  ,{' '}
                  <NextLink href="https://getbootstrap.com" target="_blank">
                    Bootstrap
                  </NextLink>
                  ,{' '}
                  <NextLink href="https://www.postgresql.org" target="_blank">
                    PostgreSQL
                  </NextLink>{' '}
                  and many others. .
                </p>
                <Button
                  as={NextLink}
                  className="bg-blue-600 hover:bg-blue-800 transition-all duration-200 text-white text-lg"
                  href="https://www.etress.com"
                  target="_blank"
                  variant="solid"
                >
                  View Site
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:pt-3 pb-2">
                <NextLink
                  className="md:text-2xl text-xl font-semibold uppercase flex flex-col items-center"
                  href="#contact"
                  id="go-to-contact"
                >
                  <p className='text-foreground'>Contact</p>
                  <span>
                    <ArrowDownIcon className="md:w-5 w-4 text-foreground" />
                  </span>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Transition>
        <ContactForm />
      </Transition>
    </section>
  );
}
