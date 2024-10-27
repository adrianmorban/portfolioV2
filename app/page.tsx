"use client";
import { useLanguage } from './context/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact, faVuejs, faDocker, faNodeJs, faLaravel, faLinux, faDigitalOcean, faAws } from '@fortawesome/free-brands-svg-icons';

import AboutESP from "./md/about-esp.md";
import AboutENG from "./md/about-eng.md";

import ProfileESP from "./md/profile-esp.md";
import ProfileENG from "./md/profile-eng.md";

import ExperienceESP from "./experience-esp.json";
import ExperienceENG from "./experience-eng.json";

import ProjectsESP from "./projects-esp";
import ProjectsENG from "./projects-eng";
import { useMouse } from "@uidotdev/usehooks";
import { useModal } from "./context/modalContext";

import ExperienceItem from './components/experienceItem';

import "swiper/swiper-bundle.css";

/*certification*/
// import AWSPracticioner from "./aws-1.png"
// import AWS from "./aws.png"

export default function Home() {

  const { language } = useLanguage();

  const Profile = language === 'eng' ? ProfileENG : ProfileESP;
  const About = language === 'eng' ? AboutENG : AboutESP;
  const Experience = language === 'eng' ? ExperienceENG : ExperienceESP;
  const Projects = language === 'eng' ? ProjectsENG : ProjectsESP;

  const { openProjectModal } = useModal();

  const [mouse, ref] = useMouse<HTMLDivElement>();

  const skills = [
    { name: 'React', icon: faReact },
    { name: 'Vue.js', icon: faVuejs },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Laravel', icon: faLaravel },
    { name: 'Linux', icon: faLinux },
    { name: 'Docker', icon: faDocker },
    { name: 'DigitalOcean', icon: faDigitalOcean },
    { name: 'AWS', icon: faAws },
  ]

  type Project = {
    id: number,
    name: string,
    description: string,
    longDescription: JSX.Element,
    url: string,
    technologies: string[],
    thumbnail: string,
  }

  const openProject = (project: Project) => () => {
    document.body.classList.add('overflow-hidden');
    openProjectModal(project);
  }

  return (
    <div className="w-full flex justify-center px-8 lg:px-24 z-50">
      <div className='hidden lg:block fixed pointer-events-none' style={{zIndex: 100}} ref={ref}>
        <div id="mouseContainer" className='w-screen h-0 pointer-events-none' style={{transform: `translate(${mouse.elementX}px, ${mouse.elementY - 40}px)`}}>
          <div className='w-10 h-10 rounded-full border-2 border-slate-100 opacity-80 -translate-x-1/2 translate-y-1/2 pointer-events-none'></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 w-full max-w-screen-xl pb-10">
        <div className="lg:min-h-screen">
          <div className="lg:sticky lg:top-0 lg:h-screen pt-28 lg:pt-48 pb-10 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-200">Adrian Morbán</h1>
              <h2 className="text-xl text-slate-400 font-semibold mt-2">Full-Stack Developer</h2>
              <div className='mt-2 max-w-[460px] text-slate-200'>
                <Profile />
              </div>
              <div className='text-slate-200 mt-8 lg:mt-10'>
                <div className='grid grid-cols-4 lg:grid-cols-8 lg:gap-4 gap-y-8 lg:w-max'>
                  {skills.map((skill, i) => (
                    <div key={i} className='flex items-center justify-center gap-x-2 cursor-pointer transition-all duration-300 hover:scale-110'>
                      <FontAwesomeIcon icon={skill.icon} className='w-10 h-10' />
                      {/* <span>{skill.name}</span> */}
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className='flex mt-10'>
                <Image src={AWSPracticioner} alt="AWS" className='h-32 w-auto' />
                <Image src={AWS} alt="AWS" className='h-32 w-auto' />
              </div> */}
            </div>
            <div className='lg:flex text-slate-200 gap-x-4 hidden'>
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
          <div className="lg:py-48 flex flex-col gap-4">
            <div id='about' className='flex flex-col gap-4'>
              <About />
            </div>
            <div id="experience" className='flex flex-col gap-5 lg:gap-8 mt-5 lg:mt-10'>
              <h2 className='text-2xl text-slate-200 font-semibold'>{language == 'eng' ? "Experience" : "Experiencia"}</h2>
              <div className='flex flex-col gap-8 lg:gap-2'>
                {Experience.map((exp, i) => (
                  exp.url ? 
                  <a key={i} href={exp.url} target="_blank">
                    <ExperienceItem key={i} {...exp} />
                  </a> :
                  <ExperienceItem key={i} {...exp} />
                ))}
              </div>
              <div id="projects" className='flex flex-col lg:gap-8 gap-5 mt-5 lg:mt-10'>
                <h2 className='text-2xl text-slate-200 font-semibold'>{language == 'eng' ? "Projects" : "Proyectos"}</h2>
                <div className='grid md:grid-cols-2 gap-8 lg:gap-2'>
                  {Projects.map((project, i:number) => (
                    <div onClick={openProject(project)} key={i} className='grid  gap-4 transition-all duration-500 cursor-pointer lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:bg-slate-800/20 lg:hover:backdrop-blur-3xl rounded-lg lg:px-4 lg:py-6 drop-shadow-lg'>
                      <div className=''>
                        <img className='rounded-md' src={project.thumbnail} alt="Project" />
                      </div>
                      <div className=''>
                        <h3 className='text-slate-200 leading-none mb-1'>{project.name}</h3>
                        <p className='text-sm'>{project.description}</p>
                        <div className='mt-2 flex flex-wrap gap-2'>
                          {project.technologies.map((tech, i:number) => (
                            <span key={i} className='text-xs bg-teal-400/10 text-teal-300 rounded-lg px-2 py-1'>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
