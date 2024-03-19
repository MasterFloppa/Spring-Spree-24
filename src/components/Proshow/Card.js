import React, { useState } from 'react';
import "./card.css"

const Card = ({ Image, Title, Desc, Image2, index }) => {
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="flex justify-center items-center card-pro mx-12 md:my-0" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
                <div className="wrapper">
                    <img src={Image} className={`cover-image ${hover ? 'hidden' : ''} `} alt="cover" />
                    <img src={Image2} className={`cover-image ${hover ? '' : 'hidden'} `} alt="cover" />
                </div>
                <div className="Title"> {Title} </div>
                <div className='Desc'> {Desc} </div>
            </div>
        </>
    )
}

export default Card;