import React from 'react';
import cguest from './director.jpg';
import './index.css';

export const Cguest = () =>{
    return (
        <div>
            <div style={{ backgroundColor: '#283994' }} className='text-white w-full px-4 md:px-6 lg:px-8 flex flex-row justify-center items-center flex-wrap'>
                <h1 className='flex-[100%] text-center text-4xl font-[800]'>SPECIAL THANKS</h1>
                
                <div className='img-cont relative'>
                    <div className='overlay absolute top-0 left-0 h-full w-full z-10' ></div>
                    <img className='min-w-[450px] max-w-[600px] w-full h-auto' src={cguest} alt='cguest'/>
                </div>
                <div className='min-w-[45%] flex flex-col justify-center items-center p-6'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-[600] mb-[-6px]'>TO</h1>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-[600] mb-[-6px]'>Our Honorable Director</h2>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-[600]'><span className='text-3xl md:text-5xl lg:text-6xl font-[900] text-[#ca85b8]'>Prof. Bidyadhar Subudhi</span></h2>
                </div>
                
            </div>
        <div className="eat2"></div> 
        </div>
    )
}