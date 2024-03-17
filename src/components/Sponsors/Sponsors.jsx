import React from 'react'
import SponsorsCard from './SponsorsCard'
import "./Sponsors.css"
function Sponsors() {
  return (
    <div className='w-full h-auto bg-purple flex flex-col'>
        <div className='w-full h-auto flex-col justify-center items-center mt-32'>
            <h1 className='flex justify-center text-pink text-4xl mb-10'>Title Sponsor</h1>
            <div className='flex justify-center'><SponsorsCard/></div>
        </div>
        <div className='flex-col justify-center items-center mb-10'>
            <h1 className='flex justify-center text-pink text-4xl mb-10 mt-20'>Media Sponsor</h1>
            <div className='flex justify-around items-center'>
                <div className='flex justify-center'><SponsorsCard/></div>
                <div className='flex justify-center'><SponsorsCard/></div>
                <div className='flex justify-center'><SponsorsCard/></div>
            </div>
        </div>
    </div>
  )
}

export default Sponsors