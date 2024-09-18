"use client";
import React from 'react';
import axios from "axios";
import { useModal } from '../context/modalContext';

const Footer: React.FC = () => {

    const { openModal } = useModal();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        try {
            const response = await axios.post('https://api.adrianmorban.com/send-form', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if(response.status === 200) {
                openModal(false);
                form.reset();
            }
        } catch (error) {
            openModal(true);
        }
    };

    const year = new Date().getFullYear();

    return (
        <footer className='w-full flex flex-col items-center justify-center py-5 bg-black sticky bottom-0'>
            <div className='w-full max-w-screen-md py-10'>
                <form className='grid grid-cols-2 gap-x-5 gap-y-4' onSubmit={handleSubmit}>
                    <div className='w-full flex flex-col gap-4'>
                        <label htmlFor='name' className='text-slate-400'>Nombre</label>
                        <input required type='text' name='name' placeholder='John Doe' className='w-full p-5 bg-transparent text-slate-400 rounded-md outline-none border border-slate-600 border-opacity-50' />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <label htmlFor='email' className='text-slate-400'>Email</label>
                        <input required type='email' name='email' placeholder='John Doe' className='w-full p-5 bg-transparent text-slate-400 rounded-md outline-none border border-slate-600 border-opacity-50' />
                    </div>
                    <div className='w-full col-span-2 flex flex-col gap-4'>
                        <label htmlFor='message' className='text-slate-400'>Mensaje</label>
                        <textarea required name='message' placeholder='Hola, estoy interesado en ...' className='w-full p-5 bg-transparent text-slate-400 rounded-md outline-none border border-slate-600 border-opacity-50' />
                    </div>
                    <div className='mt-4'>
                        <button type='submit' className='w-fit px-12 py-3 bg-slate-800 text-white rounded-md outline-none border border-slate-600 border-opacity-50 bg-opacity-20 hover:bg-opacity-50 transition-all duration-500'>Enviar</button>
                    </div>
                </form>
            </div>
            <div className='max-w-96'>
                <p className='text-sm text-slate-400 text-center'>Hecho en Next.js, alojado en Amazon S3 y desplegado de manera automatica usando GitHub Actions. </p>
                <p className='text-slate-400 text-center mt-5'>{`© ${year} Adrian Morbán`}</p>
            </div>
        </footer>
    );
};

export default Footer;