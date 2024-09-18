"use client";
import { createContext, useState, useContext, ReactNode } from 'react';

interface LanguageContextProps {
    language: string;
    changeLanguage: (newLanguage: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState(getInitialLanguage());

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

const getInitialLanguage = () => { 
    if(typeof window !== 'undefined') {
        const language = localStorage.getItem('language');
        if(language) return language;
    }
    return 'eng';
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
