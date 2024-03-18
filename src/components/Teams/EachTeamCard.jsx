import React from "react";
import "./EachTeamCard.css";

const EachTeamCard = ({ teamName, position, photo, link, email, phoneNum }) => {
    return (
        <div className="p-4 sm:w-1/2 lg:w-1/4 xsm:w-full xsm:px-2 sm:p-4 xsm:py-4 h-102 text-black carddd game-container ">
            <div className="item h-full border-2 border-[#fff]-200 border-opacity-60 rounded-lg overflow-hidden bg-white  border-none hover:border-stone-50 miniitem frosted-glass text-[#F9C512]">
                <div className="block">
                    <div className="banner-card relative" id="container">
                        <img
                            src={photo}
                            alt="team_image"
                            className="max-w-fit object-cover"
                        ></img>
                    </div>
                    <div className="p-6 transition duration-300 ease-in miniitem border-none ">
                        <h2 className="text-xl font-bold mb-3 text-center">
                            {teamName}
                        </h2>
                        <h3
                            style={{
                                fontSize: "0.8rem",
                                fontWeight: "normal",
                                textDecoration: "none",
                            }}
                            className="text-base text-[rgba(255,255,255,0.5)] font-medium mb-1 text-center hover:text-[rgba(255,255,255,1)]  
    focus:bg-blue-700  focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out cursor-pointer"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={email}
                        >
                            <a href={`mailto:${email}`}> {email ? email : ""} </a>
                        </h3>
                        <h3
                            style={{
                                fontSize: "0.8rem",
                                fontWeight: "normal",
                                textDecoration: "none",
                                marginBottom: "-5px",
                            }}
                            className="text-base text-[rgba(255,255,255,0.5)] font-medium mb-1 text-center  hover:text-[rgba(255,255,255,1)]  
    focus:bg-blue-700 focus:text-[#fff]] focus:outline-none focus:ring-0 active:bg-blue-800 active:text-[#fff]] transition duration-150 ease-in-out cursor-pointer"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={phoneNum}
                        >
                            <a href={`tel:${phoneNum}`}>
                                {" "}
                                {phoneNum ? "+91 " + phoneNum : ""}{" "}
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachTeamCard;