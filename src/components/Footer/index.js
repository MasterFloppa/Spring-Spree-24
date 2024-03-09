import React, { useRef, useEffect, useState } from 'react';
import "./index.css"
import image from "./logo.png"
import { NavLink } from 'react-router-dom';

const randomNumber = () => {
    return Math.floor((Math.random() * 8) + 1);
}

function randomNote() {
    const classNames = ['♩', '♪', '♫', '♬'];
    const random = classNames[Math.floor(Math.random() * classNames.length)];
    return (random);
}


const Footer = () => {
    const ref = useRef();
    return (
        <div className='relative w-full' >
            {/* <div ref={ref} className="now playing w-full" id="music">
                {
                    Array.from({ length: ((ref?.current?.offsetWidth / 10)) }, randomNumber).map((n, i) => {
                        return <span className={`bar n${n}`} key={i}></span>
                    })
                }
            </div> */}
            <footer className="relative pt-8 pb-6 rounded-4xl">
                <div className="container px-4 mx-auto">
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="flex w-full flex-wrap text-left lg:text-left">
                                <div className="w-full lg:w-6/12 px-4 flex flex-col items-center justify-center md:justify-between md:items-between md:flex-row sm:mb-8 md:mb-0">
                                    <div className=" mb-30 md:px-12 sm:px-0">
                                        <img src={image} alt="logo" className="imgmy" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-[800] xsm:text-center md:text-left">Kaladhvani</h3>
                                        <h3 className="text-xl italic font-semibold text- mt-2 xsm:text-center md:text-left">Where the culture resonates</h3>
                                        <h5 className="text-md mt-2 text-blueGray-600 xsm:text-center md:text-left">
                                            Namaste and a very warm welcome to SpringSpree - our vibrant and colorful cultural fest celebrating the rich artistic traditions of our community!
                                        </h5>
                                    </div>

                                </div>

                                <div className="w-full lg:w-6/12 md:px-4">
                                    <div className="flex sm:flex-row xsm:flex-col items-top mb-6 sm:pt-6 md:pt-6 lg:pt-2">
                                        <div className="w-full lg:w-4/12 px-4 mx-auto xsm:flex xsm:flex-col xsm:justify-center xsm:items-center md:justify-start md:items-start sm:pl-12">
                                            <span className="block uppercase text-blueGray-500 text-lg font-semibold my-2">Useful Links</span>
                                            <ul className="list-unstyled cl-effect-1 SMN_effect-24">
                                                <li className='xsm:pl-7 sm:pl-1 font-medium'>
                                                    <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-weight-600 block pb-2 text-md pt-2 fancy3" to="/events" >Events</NavLink>
                                                    <hr className='hr-13' />
                                                </li>
                                                <li className='xsm:pl-7 sm:pl-1 font-medium'>
                                                    <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-weight-600 block pb-2 text-md pt-2 fancy3" to="/sponsors">Sponsors</NavLink>
                                                    <hr className='hr-13' />
                                                </li>

                                                <li className='xsm:pl-7 sm:pl-1 font-medium'>
                                                    <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-weight-600 block pb-2 text-md pt-2 anim" to="/blogs">Blogs</NavLink>
                                                    <hr className='hr-13' />
                                                </li>
                                                <li className='xsm:pl-7 sm:pl-1 font-medium'>
                                                    <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-weight-600 block pb-2 text-md pt-2 anim" to="/faq">FAQS</NavLink>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="w-full lg:w-[40%] px-4 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center sm:justify-start sm:items-start">
                                            <span className="block uppercase text-blueGray-500 text-lg font-semibold my-2">Venue</span>
                                            <ul className="list-unstyled xsm:text-center sm:text-left">
                                                <li className="tracking-wide font-medium">
                                                    National Institute of Technology Warangal, Hanamkonda Road, 506004
                                                </li>
                                                <li className='font-medium'>
                                                    springspree@nitw.ac.in
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <ul className="wrapper flex flex-row justify-center items-center">
                                    <a href="https://www.youtube.com/channel/UCUs-ml2ULd_IxFLU4oCb0Kw" target="_blank" rel="noreferrer">
                                        <li className="icon youtube">
                                            <span className="tooltip">Youtube</span>
                                            <span><i className="fab fa-youtube"></i></span>
                                        </li>
                                    </a>
                                    <a href="https://www.facebook.com/nitw.springspree/" target="_blank" rel="noreferrer">
                                        <li className="icon facebook">
                                            <span className="tooltip">Facebook</span>
                                            <span><i className="fab fa-facebook-f"></i></span>
                                        </li>
                                    </a>
                                    <a href="https://www.instagram.com/springspree_nitw/" target="_blank" rel="noreferrer">
                                        <li className="icon instagram">
                                            <span className="tooltip">Instagram</span>
                                            <span><i className="fab fa-instagram"></i></span>
                                        </li>
                                    </a>
                                    <a href="https://twitter.com/ss_nitw" target="_blank" rel="noreferrer">
                                        <li className="icon twitter">
                                            <span className="tooltip">Twitter</span>
                                            <span><i className="fab fa-twitter"></i></span>
                                        </li>
                                    </a>
                                </ul>
                                <div id="content">
                                    <div id="horz-list" className=''>
                                        <ul>
                                            <li><a href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/privacy">Privacy Policy</a></li>
                                            <li><a href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/terms">Terms & Conditions</a></li>
                                            <li><a href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/refund">Cancellation & Refund</a></li>
                                            <li><a href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/shipping">Shipping & Delivery</a></li>
                                            <li><a href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/contact_us">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 border-black"></hr>

                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                All rights reserved © <span id="get-current-year">2023</span><span className="text-blueGray-500 hover:text-gray-800"> SpringSpree'23 Dev Team </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer