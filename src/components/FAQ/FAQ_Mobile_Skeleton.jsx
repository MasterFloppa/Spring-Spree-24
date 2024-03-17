import React, { useState } from 'react'

function FAQ_Mobile_Skeleton({title,content}) {
    const [show,setShow]= useState(false);
  return (
    <div className='faq'>
        <div className='main-heading' onClick={()=>{setShow(!show)}}>
            <p className='FQA_icon'>{show ?"-" : "＋"}</p>
            <h3 className='questions'>{title}</h3>
        </div>
            {show && <p className='answers'>{content}</p>}
          
    </div>
  )
}

export default FAQ_Mobile_Skeleton