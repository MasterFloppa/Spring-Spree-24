import React, { useState, useLayoutEffect } from "react";
// components
import Hero from "./Hero";
import { About } from "./About";
import { Cguest } from "./Cguest";
import top_bg from './top_bg2.png';
import bottom_bg from './bottom_bg2.png';

const Home = (props) => {
    return (
        <>
            {/* <img src={top_bg} alt="top_bg" className="top_bg" style={{'position': 'absolute','right':'1%','opacity':'10%','height':'150%','width':'70%'}}/>
            <img src={bottom_bg} alt="bottom_bg" className="bottom_bg" style={{'position': 'absolute','top':'200%','left':'%','opacity':'10%','height':'150%','width':'70%'}}/> */}
            <Hero />
            <Cguest />
            <About />
        </>
    )
}

export default Home;