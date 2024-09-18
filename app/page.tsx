"use client";

import Image from 'next/image';
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { useLanguage } from './context/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact, faVuejs, faWordpress, faNodeJs, faLaravel, faLinux, faDigitalOcean, faAws } from '@fortawesome/free-brands-svg-icons';

import AboutESP from "./md/about-esp.md";
import AboutENG from "./md/about-eng.md";

import ProfileESP from "./md/profile-esp.md";
import ProfileENG from "./md/profile-eng.md";

import ExperienceESP from "./experience-esp.json";
import ExperienceENG from "./experience-eng.json";

import projects from "./projects.json"
import tiendaScreenshot from "./tienda.png"
import avanScreenshot from "./avan.png";
import { useMouse } from "@uidotdev/usehooks";
import { useModal } from "./context/modalContext";

import ExperienceItem from './components/experienceItem';

/*certification*/
import AWSPracticioner from "./aws-1.png"
import AWS from "./aws.png"

export default function Home() {

  const { language } = useLanguage();

  const Profile = language === 'eng' ? ProfileENG : ProfileESP;
  const About = language === 'eng' ? AboutENG : AboutESP;
  const Experience = language === 'eng' ? ExperienceENG : ExperienceESP;

  const { openProjectModal } = useModal();

  const [mouse, ref] = useMouse<HTMLDivElement>();

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
    longDescription: string,
    url: string,
    technologies: string[],
    image: StaticImageData,
  }

  const openProject = (project: Project) => () => {
    openProjectModal(project);
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
          longDescription: project.longDescription,
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
          longDescription: project.longDescription,
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
      <div className='fixed pointer-events-none' style={{zIndex: 100}} ref={ref}>
        <div id="mouseContainer" className='w-screen h-0 pointer-events-none' style={{transform: `translate(${mouse.elementX}px, ${mouse.elementY - 40}px)`}}>
          <div className='w-10 h-10 rounded-full border-2 border-slate-100 opacity-80 -translate-x-1/2 translate-y-1/2 pointer-events-none'></div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full max-w-screen-xl">
        <div className="min-h-screen">
          <div className="sticky top-0 h-screen pt-48 pb-10 flex flex-col justify-between">
            <div>
              <h1 className="text-6xl font-bold tracking-tight text-slate-200">Adrian Morbán</h1>
              <h2 className="text-xl text-slate-400 font-semibold mt-2">Full-Stack Developer</h2>
              <div className='mt-2 max-w-[460px] text-slate-200'>
                <Profile />
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
              <div className='flex mt-10'>
                <Image src={AWSPracticioner} alt="AWS" className='h-32 w-auto' />
                <Image src={AWS} alt="AWS" className='h-32 w-auto' />
              </div>
            </div>
            <div className='flex text-slate-200 gap-x-4'>
              <div className='flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:scale-110'>
                <a href="https://www.linkedin.com/in/adrianmorban/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6' />
                </a>
              </div>
              <div className='flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:scale-110'>
                <a href="https://github.com/adrianmorban" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-slate-400 flex flex-col gap-4">
          <div className="py-48 flex flex-col gap-4">
            <div id='about' className='flex flex-col gap-4'>
              <About />
            </div>
            <div id="experience" className='flex flex-col gap-8 mt-10'>
              <h2 className='text-2xl text-slate-200 font-semibold'>{language == 'eng' ? "Experience" : "Experiencia"}</h2>
              {Experience.map((exp, i) => (
                exp.url ? 
                <a key={i} href={exp.url} target="_blank">
                  <ExperienceItem key={i} {...exp} />
                </a> :
                <ExperienceItem key={i} {...exp} />
              ))}
              <div id="projects" className='flex flex-col gap-8 mt-10'>
                <h2 className='text-2xl text-slate-200 font-semibold'>{language == 'eng' ? "Projects" : "Proyectos"}</h2>
                {projectsFiltered().map((project, i:number) => (
                <div onClick={openProject(project)} key={i} className='grid grid-cols-8 gap-4 transition-all duration-500 cursor-pointer hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:bg-slate-800/20 hover:backdrop-blur-3xl rounded-lg px-4 py-6 drop-shadow-lg'>
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
