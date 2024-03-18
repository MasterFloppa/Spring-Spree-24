import React from 'react'
import SponsorsCard from './SponsorsCard'
import "./Sponsors.css"
function Sponsors() {
  return (
    <div className='w-full h-auto bg-purple flex flex-col'>
        <div className='w-full h-auto flex-col justify-center items-center mt-32'>
            <div className='flex justify-center text-pink text-4xl mb-10'>Title Sponsor</div>
            <div className='flex justify-center'><SponsorsCard/></div>
        </div>
        <div className='spons flex-col justify-center items-center mb-10'>
            <div className='flex justify-center text-pink text-4xl mb-10 mt-20'>Media Sponsor</div>
            <div className='spons_line'>
                <div className='flex justify-center'><SponsorsCard/></div>
                <div className='flex justify-center'><SponsorsCard/></div>
                <div className='flex justify-center'><SponsorsCard/></div>
            </div>
        </div>
    </div>
  )
}

export default Sponsors