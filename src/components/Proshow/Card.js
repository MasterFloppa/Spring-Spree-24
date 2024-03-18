import React, { useState } from 'react';
import "./card.css"

const Card = ({ link1, link2, link3, link4 }) => {
    const [hover, setHover] = useState(false);
    console.log(link4);

    return (
        <>
            {/* <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank"> */}
            <div className="card-pro mx-12 md:my-0" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
                <div className="wrapper">
                    <img src={link1} className={`cover-image ${hover ? 'hidden' : ''} `} alt="cover" />
                    <img src={link4} className={`cover-image ${hover ? '' : 'hidden'} `} alt="cover" />
                </div>
                <img src={link2} className={`title-pro ${hover ? '' : 'hidden'}`} alt="title" />
                <img src={link3} className="character" alt="character" />
            </div>
        </>
    )
}

export default Card;