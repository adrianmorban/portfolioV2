"use client";
import { createContext, useState, useContext, ReactNode } from 'react';
import { StaticImageData } from 'next/image';

type Project = {
    id: number,
    name: string,
    description: string,
    longDescription: string,
    url: string,
    technologies: string[],
    image: StaticImageData,
}

interface ModalContextProps {
    isModalOpen: boolean;
    thereWasError: boolean;
    openModal: (error: boolean) => void;
    closeModal: () => void;
    isProjectModalOpen: boolean;
    openProjectModal: (project: Project) => void;
    closeProjectModal: () => void;
    project: Project|null;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [project, setProject] = useState<Project | null>(null);

    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

    const [thereWasError, setThereWasError] = useState(false);

    const openModal = (error: boolean = false) => {
        if(error) setThereWasError(true);
        setIsModalOpen(true);
    }

    const openProjectModal = (project: Project) => {
        if(!project) throw new Error('Project is required to open the modal');
        setProject(project);
        setIsProjectModalOpen(true);
    };
        
    const closeModal = () => setIsModalOpen(false);

    const closeProjectModal = () => setIsProjectModalOpen(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, thereWasError, openModal, closeModal, isProjectModalOpen, openProjectModal, closeProjectModal, project }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
