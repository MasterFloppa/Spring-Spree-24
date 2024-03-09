import React, { useState, useLayoutEffect } from "react";
// components
import Hero from "./Hero";
import { About } from "./About";
import { Pspk } from "./Pspk";

const Home = (props) => {
    return (
        <>
            <Hero />
            <Pspk />
            <About />
        </>
    )
}

export default Home;