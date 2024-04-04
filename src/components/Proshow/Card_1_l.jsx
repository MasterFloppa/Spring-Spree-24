import React, { useRef, useEffect } from "react";
import "./Card_1_l.css";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function Card_l({ Image, Title, Desc, Image2, index }) {
  const isLaptopScreen = () => {
    return window.innerWidth > 1024; // Adjust this value as per your requirement for laptop size
};
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 25,
    glare: true,
    maxglare: 1,
  };
  return (
    <>
      {isLaptopScreen() ? (
        <Tilt>
        <div className="pro_show_card_container">
          <div className="pro_show_img">
            <img src={Image} alt="Proshow" />
          </div>
          <div className="pro_show_content">
            <h3 className="pro_show_title">{Title}</h3>
            <p className="pro_show_desc">{Desc}</p>
          </div>
        </div>
      </Tilt>
      ) : (
        <div className="pro_show_card_container">
          <div className="pro_show_img">
            <img src={Image} alt="Proshow" />
          </div>
          <div className="pro_show_content">
            <h3 className="pro_show_title">{Title}</h3>
            <p className="pro_show_desc">{Desc}</p>
          </div>
        </div>
      )}
    </>
    
  );
}

export default Card_l;
