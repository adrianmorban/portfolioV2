"use client";
import React, {useState} from 'react';
import { useModal } from '../context/modalContext';
import Image from 'next/image';
import Avan from '../avan.png';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectModal = () => {

    const [isTextVisible, setIsTextVisible] = useState(false);

    const { isProjectModalOpen, closeProjectModal, project } = useModal();

    if (!isProjectModalOpen) return null;

    const stop = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    const closeModal = () => {
        closeProjectModal();
    }

    const toggleTextVisibility = () => {
        setIsTextVisible(!isTextVisible);
    }

    return (
        <div className="modal animate__animated animate__fadeIn w-screen h-screen fixed z-[1000] top-0 left-0 flex items-center justify-center" onClick={closeModal}>
            <div onClick={stop} className="bg-white p-2 rounded-xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-10 h-[90%] w-[90%] grid grid-cols-10 justify-center items-start">
                <div className='rounded-md overflow-hidden w-full h-full col-span-10 relative'>
                    <Image src={Avan} alt="Avatar" className="w-full h-full object-fill" />
                    <div className={`absolute w-full flex flex-col justify-center gap-5 bottom-0 px-10 bg-black backdrop-blur-2xl bg-opacity-50 overflow-hidden ${isTextVisible ? "py-2" : "py-10"}`}>
                        <div className='flex items-center justify-between w-full'>
                            <h3 className='text-slate-200 text-xl font-semibold leading-none'>{project!.name}</h3>
                            <FontAwesomeIcon onClick={toggleTextVisibility} icon={faCaretDown} className={`w-6 h-6 text-slate-200 cursor-pointer transition-all duration-500 ${isTextVisible ? "rotate-180" : ""}`} />
                        </div>
                        <div className={`flex flex-col gap-5 ${isTextVisible ? "hidden": ""}`}>
                            <p className='text-slate-200 text-justify'>{project!.longDescription}</p>
                            <div className='flex flex-wrap gap-2'>
                                {project!.technologies.map((tech: string, i:number) => (
                                    <span key={i} className='text-sm bg-teal-400/10 text-teal-300 rounded-lg px-2 py-1'>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;