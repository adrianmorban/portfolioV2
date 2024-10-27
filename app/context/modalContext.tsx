"use client";
import { createContext, useState, useContext, ReactNode } from 'react';
type Project = {
    id: number,
    name: string,
    description: string,
    longDescription: JSX.Element,
    url: string,
    technologies: string[],
    thumbnail: string,
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
        document.body.classList.add('overflow-hidden');
        if(error) setThereWasError(true);
        setIsModalOpen(true);
    }

    const openProjectModal = (project: Project) => {
        if(!project) throw new Error('Project is required to open the modal');
        setProject(project);
        setIsProjectModalOpen(true);
    };
        
    const closeModal = () => {
        document.body.classList.remove('overflow-hidden');
        setIsModalOpen(false);
    };

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
