import React from 'react';
import Image from 'next/image';
import Logo from '../logo.png';
import DR from '../dr.png';
// import USA from '../usa.png';

const Navbar: React.FC = () => {

    const menuItems = [
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Experience',
            href: '/experience',
        },
        {
            name: 'Projects',
            href: '/projects',
        },
        {
            name: 'Contact',
            href: '/contact',
        },
    ];

    return (
        <header>
            <nav className='w-full fixed top-10 flex justify-center items-center z-20'>
                <div className='max-w-screen-xl w-full flex justify-between border border-slate-800 p-1 rounded-full backdrop-blur-lg'>
                    <div className='flex items-center space-x-4'>
                        <Image className='h-14 w-auto' src={Logo} alt='Logo' />
                    </div>
                    <ul className='flex items-center gap-8'>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='text-white hover:text-gray-300'>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <Image className='h-14 w-auto cursor-pointer' src={DR} alt='DR' />
                        {/* <Image className='h-8 w-auto' src={USA} alt='USA' /> */}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;