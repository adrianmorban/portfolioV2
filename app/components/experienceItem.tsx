import React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type experienceItem = {
    from: string;
    to: string;
    company: string;
    position: string;
    description: string;
    technologies: string[];
    url?: string;
}

const ExperienceItem = (exp: experienceItem) => {
    return (
        <div className='grid grid-cols-8 gap-4 transition-all duration-500 cursor-pointer hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:bg-slate-800/20 hover:backdrop-blur-3xl rounded-lg px-4 py-6 drop-shadow-lg'>
            <div className='col-span-2 text-xs'>
            <p>{`${exp.from} - ${exp.to}`}</p>
            </div>
            <div className='col-span-6'>
            <div className='mb-1 flex gap-2'>
                <h3 className='text-slate-200 leading-none'>{exp.company}</h3>
                {exp.url && <FontAwesomeIcon icon={faArrowUp} className='w-4 h-4 text-slate-50 rotate-45' />}
            </div>
            <p className='text-slate-500'>{exp.position}</p>
            <p className='text-sm'>{exp.description}</p>
            <div className='mt-2 flex flex-wrap gap-2'>
                {exp.technologies.map((tech, i) => (
                <span key={i} className='text-xs bg-teal-400/10 text-teal-300 rounded-lg px-2'>{tech}</span>
                ))}
            </div>
            </div>
        </div>
    );
};

export default ExperienceItem;