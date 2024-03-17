import React from 'react'
import Image from "../../sponsors/curr/springspree22_78.jpeg"
import "./Sponsors.css"
function SponsorsCard() {
  return (
    <div className='flex flex-col'>
        <div className='box mx-8'>
            <div>
                <img className='object-cover' src={Image}/>
            </div>
        </div>
        <div className='text-pink text-2xl mt-12 mb-10 flex justify-center'>NITW Alumni Association</div>
    </div>
  )
}

export default SponsorsCard