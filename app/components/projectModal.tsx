"use client";
import React from 'react';
import { useModal } from '../context/modalContext';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectModal = () => {

    const { isProjectModalOpen, closeProjectModal, project } = useModal();

    if (!isProjectModalOpen) return null;

    const stop = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    const closeModal = () => {
        document.body.classList.remove('overflow-hidden');
        closeProjectModal();
    }

    return (
        <div className="modal animate__animated animate__fadeIn w-screen h-screen fixed z-[1000] top-0 left-0 flex items-center justify-center" onClick={closeModal} data-lenis-prevent>
            <div onClick={stop} className="bg-white p-1 lg:p-2 rounded-xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-10 h-[80%] lg:h-[90%] w-[90%] max-w-[1080px] grid grid-cols-10 justify-center items-start">
                <div className='rounded-md w-full h-full col-span-10 relative overflow-hidden'>
                    <div className='w-full h-full bg-black p-4 lg:p-10 overflow-auto'>
                        <div className='text-slate-400 flex flex-col gap-5'>
                            <div>
                                <a href={project?.url} target="_blank" className='text-slate-200 hover:text-teal-400 transition-all duration-300 flex gap-2'>
                                <h3 className='text-xl font-semibold leading-none'>{project!.name}</h3>
                                <FontAwesomeIcon icon={faArrowUp} className='w-4 h-4 rotate-45' />
                                </a>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {project!.technologies.map((tech, i:number) => (
                                    <span key={i} className='text-xs bg-teal-400/10 text-teal-300 rounded-lg px-2 py-1'>{tech}</span>
                                ))}
                            </div>
                            <div className='flex flex-col gap-4 prose prose-headings:text-slate-400 prose-headings:m-0 prose-p:m-0 prose-img:m-0 prose-video:m-0 prose-img:rounded-lg w-full max-w-full text-slate-400'>
                                {project!.longDescription}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;