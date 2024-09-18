"use client";
import React from 'react';
import { useModal } from '../context/modalContext';
import Image from 'next/image';

const Error = () => {
    return (
        <>
            <Image src="error.apng" alt="Error" width={150} height={150} />
            <div className='flex items-center justify-center flex-col gap-4'>
                <h2 className="text-2xl text-slate-200 font-semibold">Error</h2>
                <p className="text-slate-400 text-center">There was an error sending the message, please try again.</p>
            </div>
        </>
    );
};

const Success = () => {
    return (
        <>
            <Image src="success.apng" alt="Success" width={150} height={150} />
            <div className='flex items-center justify-center flex-col gap-4'>
                <h2 className="text-2xl text-slate-200 font-semibold">Success</h2>
                <p className="text-slate-400 text-center">The message has been sent successfully, I will contact you as soon as possible.</p>
            </div>
        </>
    );
};

const Modal = () => {
    
    const { isModalOpen, closeModal, thereWasError } = useModal();

    if (!isModalOpen) return null;

    const stop = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    return (
        <div className="modal animate__animated animate__fadeIn w-screen h-screen fixed z-[1000] top-0 left-0 flex items-center justify-center" onClick={closeModal}>
            <div onClick={stop} className="bg-white p-4 rounded-xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-10 h-[340px] w-[500px] flex flex-col justify-center items-center px-20 gap-5 pb-10">
                {thereWasError ? (
                    <Error />
                ) : (
                    <Success />
                )}
            </div>
        </div>
    );
};

export default Modal;