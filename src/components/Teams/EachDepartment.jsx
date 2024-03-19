import React from 'react'
import EachDepartmentCard from './EachDepartmentCard'
import "./EachDepartment.css"
import img from './stock-image.jpeg';


function EachDepartment() {
  return (
    <div className='Each-department pt-40'>
      <div className='Each-department-container '>
        <div className='Each-department-title'>Web Development</div>
        <div className='mt-32 flex justify-center'> <EachDepartmentCard photo={img}/> </div>
      </div>
    </div>
  )
}

export default EachDepartment