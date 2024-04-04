import React, { useRef, useEffect, useState } from "react";
import "./Card_1_mt.css";

function Card_mt({ Image, Title, Desc, Image2, index }) {
  const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
  return (
        <div className={`pro_show_card_container_mt ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick} >
          <div className="pro_show_img">
            <img src={Image} alt="Proshow" />
          </div>
          <div className={`pro_show_content ${isClicked ? 'visible' : ''}`}>
            <h3 className="pro_show_title">{Title}</h3>
            <p className="pro_show_desc">{Desc}</p>
          </div>
        </div>
  );
}

export default Card_mt;
