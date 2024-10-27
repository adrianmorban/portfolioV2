"use client";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useModal } from '../context/modalContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import { useLanguage } from '../context/languageContext';

const Footer: React.FC = () => {

    const { language } = useLanguage();

    const [sending, setSending] = useState(false);

    const { openModal } = useModal();

    const [formText, setFormText] = useState({
        name: {
            label: "Name",
            placeholder: "John Doe",
        },
        email: {
            label: "Email",
            placeholder: "johndoe@somemail.com"
        },
        message: {
            label: "Message",
            placeholder: "Hola, estoy interesado en ..."
        },
        submit: {
            normal: "Send",
            sending: "Sending ...",
        }
    });

    const [footerText, setFooterText] = useState("");

    useEffect(() => {
        if(language === 'esp') {
            setFormText({
                name: {
                    label: "Nombre",
                    placeholder: "Juan Perez",
                },
                email: {
                    label: "Correo",
                    placeholder: "juanperez@somemail.com"
                },
                message: {
                    label: "Mensaje",
                    placeholder: "Hola, estoy interesado en ..."
                },
                submit: {
                    normal: "Enviar",
                    sending: "Enviando ..."
                }
            });
            setFooterText("Hecho en Next.js, alojado en Amazon S3 y desplegado de manera automatica usando GitHub Actions.");
        }
        else {
            setFormText({
                name: {
                    label: "Name",
                    placeholder: "John Doe",
                },
                email: {
                    label: "Email",
                    placeholder: "johndoe@somemail.com"
                },
                message: {
                    label: "Message",
                    placeholder: "Hello, I'm interested in ..."
                },
                submit: {
                    normal: "Send",
                    sending: "Sending ..."
                }
            });
            setFooterText("Built with Next.js, hosted on Amazon S3 and deployed automatically using GitHub Actions");
        }
    }
    , [language]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
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
            setSending(false);
        } catch (error) {
            openModal(true);
            setSending(false);
        }
    };

    const year = new Date().getFullYear();

    return (
        <footer className='w-full flex flex-col items-center justify-center py-5 bg-black sticky bottom-0 px-8 lg:px-0'>
            <div className='w-full max-w-screen-md py-10'>
                <form className='grid lg:grid-cols-2 gap-x-5 gap-y-4' onSubmit={handleSubmit}>
                    <div className='w-full flex flex-col gap-4'>
                        <label htmlFor='name' className='text-slate-400'>{formText.name.label}</label>
                        <input required type='text' name='name' placeholder={formText.name.placeholder} className='w-full p-5 bg-transparent text-slate-400 rounded-md outline-none border border-slate-600 border-opacity-50' />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <label htmlFor='email' className='text-slate-400'>{formText.email.label}</label>
                        <input required type='email' name='email' placeholder={formText.email.placeholder} className='w-full p-5 bg-transparent text-slate-400 rounded-md outline-none border border-slate-600 border-opacity-50' />
                    </div>
                    <div className='w-full lg:col-span-2 flex flex-col gap-4'>
                        <label htmlFor='message' className='text-slate-400'>{formText.message.label}</label>
                        <textarea required name='message' placeholder={formText.message.placeholder} className='w-full p-5 bg-transparent text-slate-400 rounded-md outline-none border border-slate-600 border-opacity-50' />
                    </div>
                    <div className='mt-4'>
                        <button disabled={sending} type='submit' className='w-fit px-12 py-3 bg-slate-800 text-white rounded-md outline-none border border-slate-600 border-opacity-50 bg-opacity-20 hover:bg-opacity-50 transition-all duration-500'>{`${sending ? formText.submit.sending: formText.submit.normal}`}</button>
                    </div>
                </form>
            </div>
            <div className='max-w-96'>
                <p className='text-sm text-slate-400 text-center'>{footerText}</p>
                <p className='text-slate-400 text-center mt-5'>{`${year} Adrian Morbán©`}</p>
                <div className='flex justify-center mt-5 text-slate-200 gap-x-4 lg:hidden'>
                    <div className='flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:scale-110'>
                        <a href="https://www.linkedin.com/in/adrianmorban/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8' />
                        </a>
                    </div>
                    <div className='flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:scale-110'>
                        <a href="https://github.com/adrianmorban" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className='w-8 h-8' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;