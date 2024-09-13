"use client";

import Image from 'next/image';
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedin, faInstagram, faCodepen} from '@fortawesome/free-brands-svg-icons'; 
import { faReact, faVuejs, faWordpress, faNodeJs, faLaravel, faLinux, faDigitalOcean, faAws } from '@fortawesome/free-brands-svg-icons';
import About from "./md/about-esp.md"
import experience from "./experience.json"
import projects from "./projects.json"
import tiendaScreenshot from "./tienda.png"
import avanScreenshot from "./avan.png";

/*certification*/
// import AWSPracticioner from "./aws-1.png"
// import AWS from "./aws.png"

export default function Home() {

  const skills = [
    { name: 'React', icon: faReact },
    { name: 'Vue.js', icon: faVuejs },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Laravel', icon: faLaravel },
    { name: 'WordPress', icon: faWordpress },
    { name: 'Linux', icon: faLinux },
    { name: 'DigitalOcean', icon: faDigitalOcean },
    { name: 'AWS', icon: faAws },
  ]

  type Project = {
    id: number,
    name: string,
    description: string,
    url: string,
    technologies: string[],
    image: StaticImageData,
  }

  const projectsFiltered = ():Project[] => {
    const projectsToShow = [] as Project[];
    let projectToPush = {} as Project;
    projects.forEach(project => {
      if(project.id === 1) {
        projectToPush = {
          id: project.id,
          name: project.name,
          description: project.description,
          url: project.url,
          technologies: project.technologies,
          image: tiendaScreenshot
        }
      }
      else if(project.id === 2) {
        projectToPush = {
          id: project.id,
          name: project.name,
          description: project.description,
          url: project.url,
          technologies: project.technologies,
          image: avanScreenshot
        }
      }
      projectsToShow.push(projectToPush)
    })
    return projectsToShow;
  }

  return (
    <div className="w-full flex justify-center px-24 z-50">
      <div className="grid grid-cols-2 w-full max-w-screen-xl">
        <div className="min-h-screen">
          <div className="sticky top-0 h-screen pt-48 pb-10 flex flex-col justify-between">
            <div>
              <h1 className="text-6xl font-bold tracking-tight text-slate-200">Adrian Morbán</h1>
              <h2 className="text-xl text-slate-400 font-semibold mt-2">Full-Stack Developer</h2>
              <div className='mt-2 max-w-[460px]'>
                <p className='text-slate-200'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
              </div>
              <div className='text-slate-200 mt-10'>
                <div className='grid grid-cols-8 gap-4 w-max'>
                  {skills.map((skill, i) => (
                    <div key={i} className='flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:scale-110'>
                      <FontAwesomeIcon icon={skill.icon} className='w-10 h-10' />
                      {/* <span>{skill.name}</span> */}
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className='flex mt-10'>
                <Image src={AWSPracticioner} alt="AWS" className='h-24 w-auto' />
                <Image src={AWS} alt="AWS" className='h-24 w-auto' />
              </div> */}
            </div>
            <div className='flex text-slate-200 gap-x-4'>
              <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6' />
              <FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
              <FontAwesomeIcon icon={faCodepen} className='w-6 h-6' />
              <FontAwesomeIcon icon={faXTwitter} className='w-6 h-6' />
              <FontAwesomeIcon icon={faInstagram} className='w-6 h-6' />
            </div>
          </div>
        </div>
        <div className="text-slate-400 flex flex-col gap-4">
          <div className="py-48 flex flex-col gap-4">
            <About />
            <div className='flex flex-col gap-8 mt-10'>
              <h2 className='text-2xl text-slate-200 font-semibold'>Experience</h2>
              {experience.map((exp, i) => (
                <div key={i} className='grid grid-cols-8 gap-4 transition-all duration-500 cursor-pointer hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:bg-slate-800/20 hover:backdrop-blur-3xl rounded-lg px-4 py-6 drop-shadow-lg'>
                  <div className='col-span-2 text-xs'>
                    <p>{`${exp.from} - ${exp.to}`}</p>
                  </div>
                  <div className='col-span-6'>
                    <h3 className='text-slate-200 leading-none mb-1'>{exp.company}</h3>
                    <p className='text-slate-500'>{exp.position}</p>
                    <p className='text-sm'>{exp.description}</p>
                    <div className='mt-2'>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className='text-xs bg-teal-400/10 text-teal-300 rounded-lg px-2 py-1 mr-2'>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className='flex flex-col gap-8 mt-10'>
                <h2 className='text-2xl text-slate-200 font-semibold'>Projects</h2>
                {projectsFiltered().map((project, i:number) => (
                <div key={i} className='grid grid-cols-8 gap-4 transition-all duration-500 cursor-pointer hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:bg-slate-800/20 hover:backdrop-blur-3xl rounded-lg px-4 py-6 drop-shadow-lg'>
                  <div className='col-span-2'>
                    <Image className='rounded-md' src={project.image} alt="Project" />
                  </div>
                  <div className='col-span-6'>
                    <h3 className='text-slate-200 leading-none mb-1'>{project.name}</h3>
                    <p className='text-sm'>{project.description}</p>
                    <div className='mt-2'>
                      {project.technologies.map((tech, i:number) => (
                        <span key={i} className='text-xs bg-teal-400/10 text-teal-300 rounded-lg px-2 py-1 mr-2'>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
