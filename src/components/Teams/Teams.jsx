import React, { useEffect, useState } from "react";
import TeamsCard from "./TeamsCard";

const teamInformation = [
    {
        teamName: "Prof. N.V. Ramana Rao ",
        position: "Director",
        photo: 'https://res.cloudinary.com/dzeqa9z3n/image/upload/v1680347359/Director_nh83bb.jpg',
        link: "",
        email: "",
        phoneNum: "",
    },
    {
        teamName: "Dr. P. Ravi Kumar",
        position: "Dean Student Welfare",
        photo: 'https://res.cloudinary.com/dzeqa9z3n/image/upload/v1680347359/SW_wfqbh1.jpg',
        link: "",
        email: "",
        phoneNum: "",
    },
    {
        teamName: "Dr. M. Heeralal",
        position: "Faculty Advisor",
        photo: 'https://res.cloudinary.com/dzeqa9z3n/image/upload/v1680349725/Heeralal_vuuina.jpg',
        link: "",
        email: "",
        phoneNum: "",
    },
    {
        teamName: "Ajay Kumar Alagiri",
        position: "Student Coordinator",
        photo: 'http://res.cloudinary.com/dzeqa9z3n/image/upload/v1680335800/main/media/IMG_20220917_174942.jpg.jpg',
        link: "",
        email: "alagir_831952@student.nitw.ac.in",
        phoneNum: "9100264657",
    },
    {
        teamName: "Sai Gurunath",
        position: "Student Coordinator",
        photo: 'http://res.cloudinary.com/dzeqa9z3n/image/upload/v1680333210/main/media/CD68632C-644F-4BD1-B0EC-78F24B041066.jpeg.jpg',
        link: "",
        email: "dasari_851923@student.nitw.ac.in",
        phoneNum: "9966646205",
    },
    {
        teamName: "Piyush",
        position: "Student Coordinator",
        photo: 'https://res.cloudinary.com/dzeqa9z3n/image/upload/v1680728955/main/media/4E440203-0D19-4830-B4D6-9A6CA5441C0B.jpeg.jpg',
        link: "",
        email: "",
        phoneNum: "",
    },
    {
        teamName: "Vamshi Kishore Rasamalla",
        position: "Student Coordinator",
        photo: 'http://res.cloudinary.com/dzeqa9z3n/image/upload/v1680424374/main/media/IMG_6835.jpg.jpg',
        link: "",
        email: "rasama_821946@student.nitw.ac.in",
        phoneNum: "9963601982",
    },

];

const Teams = () => {
    const [teamInfo, SetTeamInfo] = useState(teamInformation);

    useEffect(() => {
        const URL = process.env.REACT_APP_BACKEND_URL;
        const getTeam = async () => {
            const response = await fetch(`${URL}/team`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            let data = await response.json();
            console.log(data);
            const newTeam = [...teamInfo, ...data];
            SetTeamInfo(newTeam);
        }

        getTeam();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="bg-bgBlue text-white">
            <div className='bg-purple text-pink pt-[100px] text-center flex'>
                <h1 className="sponsors-hero-title text-4xl font-[800] text-bolder mx-auto flex justify-start items-center text-center">SpringSpree Team</h1>
            </div>
            <section
                className="md:h-full flex items-center text-gray-60 bg-purple">
                <div className="container px-5 py-8 mx-auto">
                    <div className="text-center mb-6">
                        <h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
                            Director
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center -m-4 md:px-12 sm:px-16">
                        {teamInfo.map((team, index) => {
                            if (index === 0) {
                                return (
                                    <TeamsCard
                                        key={index}
                                        teamName={team.teamName}
                                        position={team.position}
                                        photo={team.photo}
                                        link={team.link}
                                        members={team.members}
                                    />
                                );
                            } else return <></>;
                        })}
                    </div>
                    <br />
                    <div className="text-center mb-8 mt-4">
                        <h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
                            Faculty
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center -m-4 md:px-12 sm:px-24">
                        {teamInfo.map((team, index) => {
                            if (index > 0 && index <= 2) {
                                return (
                                    <TeamsCard
                                        key={index}
                                        teamName={team.teamName}
                                        position={team.position}
                                        photo={team.photo}
                                        link={team.link}
                                        members={team.members}
                                    />
                                );
                            } else return <></>;
                        })}
                    </div>
                    <br />
                    <div className="text-center mb-8 mt-4">
                        <h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
                            Student Coordinators
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center -m-4 md:px-12 sm:px-24">
                        {teamInfo.map((team, index) => {
                            if (index > 2 && index <= 6) {
                                return (
                                    <TeamsCard
                                        key={index}
                                        teamName={team.teamName}
                                        position={team.position}
                                        photo={team.photo}
                                        link={team.link}
                                        members={team.members}
                                        email={team.email}
                                    />
                                );
                            } else return <></>;
                        })}
                    </div>
                    <br />
                    <br />
                    <div className="text-center mb-8 bt-4">
                        <h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
                            Student Teams
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center -m-4  md:px-16 sm:px-24">
                        {teamInfo.map((team, index) => {
                            if (index > 6) {
                                return (
                                    <TeamsCard
                                        key={index}
                                        teamName={team.teamName}
                                        position={team.position}
                                        photo={team.photo}
                                        link={team.link}
                                        members={team.members}
                                    />
                                );
                            } else return <></>;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teams;