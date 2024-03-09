import React, { useEffect, useRef } from "react";
import EachTeamCard from "./EachTeamCard";
import { useParams, useLocation } from "react-router";
import './EachTeam.css'

const EachTeam = () => {
  var scrollTop = function () {
    window.scrollTo(0, 0);
  };
  scrollTop()
  let location = useLocation();
  let teamname = location.state.name;
  let teammembers = location.state.members;
  console.log(teammembers);
  return (
    <div className="event-container bg-bgBlue text-white">
      <section
        className="md:h-full flex items-center text-gray-60 bg-[#0E0E0E]"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
              {teamname}
            </h1>
          </div>
          <div style={{ justifyContent: "center" }} className="flex flex-wrap -m-4 md:px-12 antoo">
            {teammembers.map((team) => {
              if (team.photo === "") return <></>
              else {
                return (
                  <EachTeamCard
                    email={team.email}
                    phoneNum={team.phone}
                    teamName={team.name}
                    position={team.department}
                    photo={team.photo}
                    link={team.link}
                  />)
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EachTeam;