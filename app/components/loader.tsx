"use client";
import Image from 'next/image';
import loader from '../logo.png';
import {useLoader} from '../context/loaderContext';

const Loader = () => {

    const { isLoading } = useLoader();

    if(!isLoading) return null;

    return (
        <div className="w-screen h-screen fixed z-50 bg-black">
            <div className="w-full h-full flex items-center justify-center">
                <div className="loader"></div>
                <Image src={loader} alt="Loader" className="w-auto h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>
        </div>
    );
};

export default Loader;