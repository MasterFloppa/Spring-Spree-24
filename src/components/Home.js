import React, { useState, useLayoutEffect } from "react";
// components
import Hero from "./Hero";
import { About } from "./About";
import { Cguest } from "./Cguest";

const Home = (props) => {
    return (
        <>
            <Hero />
            <Cguest />
            <About />
        </>
    )
}

export default Home;