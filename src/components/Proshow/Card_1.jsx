import React from 'react';
import Card_mt from './Card_1_mt';
import Card_l from './Card_1_l';

function Card_1({ Image, Title, Desc, Image2, index }) {
    const isLaptopScreen = () => {
        return window.innerWidth > 1024; 
    };

    return (
        <>
            {isLaptopScreen() ? <Card_l Image={Image} Title={Title} Desc={Desc} Image2={Image2} index={index} /> : <Card_mt Image={Image} Title={Title} Desc={Desc} Image2={Image2} index={index} />}
        </>
    );
}

export default Card_1;