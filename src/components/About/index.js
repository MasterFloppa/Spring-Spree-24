import React from "react";
import './about.css'
import spreelogo from './springspree2.png'
import rasengan from './Rasengan.png'

export const About = () => {
    return (
        <div className="t-b-grad">
            <div className="w-full p-4 bg-gradient-to-t to-black text-white">
                <div className="about-spree flex flex-row flex-wrap justify-center justify-items-center items-center gap-4 p-4 mb-8">
                    <br />
                    <h1 className="flex-[100%] text-center text-4xl font-bold uppercase bg-gradient-to-r from-[#FFFFFF] to-[#F7CA17] inline-block text-transparent pb-5 bg-clip-text">About SpringSpree</h1>
                    <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">

                        <img className="sm:w-[156px] lg:w-[296px] h-auto flex-shrink-1" src={spreelogo} alt="spreelogo"/>
                    </div>
                    <div className="about-content sm:w-[100%] md:w-[45%]">
                    <span className="text-[#ca85b8] font-bold">SpringSpree, NIT Warangal's annual cultural festival</span>, started in 1978 as a refreshing break from
classes. Now, after 45 years, it's renowned as one of the nation's best cultural festivals, attracting
participants from all corners. Over time, we've hosted famous artists, enriching the festival with their
esteemed presence and performances.

                    </div>
                </div>
                <div className="about-theme flex flex-row-reverse flex-wrap justify-center justify-items-center items-center gap-4 p-4 mb-10">
                    <h1 className="flex-[100%] text-center font-bold text-4xl uppercase bg-gradient-to-r from-[#FFFFFF] to-[#F7CA17] inline-block text-transparent pb-5 bg-clip-text">The Theme</h1>
                    <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">
                        <img className="sm:w-[330px] lg:w-[590px] h-auto flex-shrink-1 " src={rasengan} alt="themelogo"/>
                    </div>
                    <div className="theme-content sm:w-[100%] md:w-[45%]">
                    <span className="text-[#ca85b8] font-bold">Spring</span>, a season of vibrant renewal and boundless energy, explodes onto the scene at NITW with
                    <span className="text-[#ca85b8] font-bold">RASENGAN, the theme for this year's SpringSpree!</span> Inspired by the iconic Naruto jutsu, RASENGAN
                    embodies the concentrated potential that lies dormant within each individual, waiting to be unleashed
                    and channeled into achieving great things. Just like the swirling sphere of chakra in Naruto's hands,
                    this theme promises a festival brimming with creative energy, pushing participants to break past limitations and discover their own hidden strengths. Prepare to witness a majestic confluence of cultural celebration, artistic expression, and exhilarating competition, all ignited by the unleashed spirit of spring
                    at <span className="text-[#ca85b8] font-bold">RASENGAN!</span>

                    </div>
                </div>
            </div>
        </div>
    )
}