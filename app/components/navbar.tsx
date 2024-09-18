"use client";
import React from 'react';
import Image from 'next/image';
import Logo from '../logo.png';
import { useLanguage } from '../context/languageContext';
import { useLoader } from '../context/loaderContext';

const Navbar: React.FC = () => {

    const { language, changeLanguage } = useLanguage();

    const { setIsLoading } = useLoader();

    const changeLanguageLocal = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIsLoading(true);
        changeLanguage(e.target.value);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }

    const menuItems = () => {
        if(language === 'eng') {
            return [
                {
                    name: 'About',
                    href: '#about',
                },
                {
                    name: 'Experience',
                    href: '#experience',
                },
                {
                    name: 'Projects',
                    href: '#projects',
                },
                {
                    name: 'Contact',
                    href: '#contact',
                },
            ];
        }
        else {
            return [
                {
                    name: 'Acerca de',
                    href: '#about',
                },
                {
                    name: 'Experiencia',
                    href: '#experience',
                },
                {
                    name: 'Proyectos',
                    href: '#projects',
                },
                {
                    name: 'Contacto',
                    href: '#contact',
                },
            ];
        }
    }

    return (
        <header>
            <nav className='w-full fixed top-10 flex justify-center items-center z-20'>
                <div className='max-w-screen-xl w-full flex justify-between border border-slate-800 p-1 rounded-full backdrop-blur-lg'>
                    <div className='flex items-center space-x-4'>
                        <a href='/' className='text-white hover:text-gray-300'>
                            <Image className='h-14 w-auto' src={Logo} alt='Logo' />
                        </a>
                    </div>
                    <ul className='flex items-center gap-8'>
                        {menuItems().map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='text-white hover:text-gray-300'>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex items-center justify-center pr-4'>
                        <select className='bg-transparent text-white outline-none rounded-full p-2 cursor-pointer' onChange={changeLanguageLocal}>
                            <option value="eng" selected={language == 'eng' ? true: false}>English</option>
                            <option value="esp" selected={language == 'esp' ? true: false}>Español</option>
                        </select>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;