import React from "react";
import './about.css'

export const About = () => {
    return (
        <div className="t-b-grad">
            <div className="w-full p-4 bg-gradient-to-t to-black text-white">
                <div className="about-spree flex flex-row flex-wrap justify-center justify-items-center items-center gap-4 p-4 mb-8">
                    <br />
                    <h1 className="flex-[100%] text-center text-4xl font-bold uppercase bg-gradient-to-r from-[#FFFFFF] to-[#F7CA17] inline-block text-transparent pb-5 bg-clip-text">About SpringSpree</h1>
                    <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">
                        <img className="sm:w-[156px] lg:w-[296px] h-auto flex-shrink-1" src="../../../images/SpringSpree_logo.png" alt="spreelogo" />
                    </div>
                    <div className="about-content sm:w-[100%] md:w-[45%]">
                        Spring Spree, the annual cultural festival of NIT Warangal, commenced in 1978 as a requisite break for the students from their enervatingand monotonous class schedules and didactic courses. 37 years on, it has been established as one of the best cultural festivals in the nation, enticing massive participation from the very center to the remote corners. Over theyears, we have had famous and ingenious artists, highlighting the festival with their esteemed presence and their majestic performances.
                    </div>
                </div>
                <div className="about-theme flex flex-row-reverse flex-wrap justify-center justify-items-center items-center gap-4 p-4 mb-10">
                    <h1 className="flex-[100%] text-center font-bold text-4xl uppercase bg-gradient-to-r from-[#FFFFFF] to-[#F7CA17] inline-block text-transparent pb-5 bg-clip-text">The Theme</h1>
                    <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">
                        <img className="sm:w-[256px] lg:w-[456px] h-auto flex-shrink-1 " src="../../../images/Kaladhvani_logo.png" alt="themelogo" />
                    </div>
                    <div className="theme-content sm:w-[100%] md:w-[45%]">
                        <span className="text-[#F7CA17] font-bold">"Kala-dhvani"</span> is a term from Indian classical music that refers to the sound or resonance that is produced by the artist's instrument. It is believed that the quality of this sound or resonance is an important aspect of the music and can greatly affect the emotional impact it has on the listener.
                        <br />
                        <span className="text-[#F7CA17] font-bold">"Kala" means art or performance, while "dhvani" refers to sound or resonance. </span>Therefore, "kala-dhvani" can be interpreted as the artistic sound or resonance that is produced during a performance in Indian classical music.
                        <br />
                        The theme <span className="text-[#F7CA17] font-bold">'Kaladhvani - sounds of art' </span>reflects the different art forms and sounds that one can find in our country. We aim to showcase the diversity of our culture through various events that we have planned for the fest.
                    </div>
                </div>
            </div>
        </div>
    )
}