import React, { useEffect, useRef, useState } from "react";
import "./details.css";

import * as DOMPurify from 'dompurify';
import { Navigate } from "react-router-dom";

import { useAuth } from '../../../Context/AuthManager';

import { useNavigate } from 'react-router-dom';



function Details(props) {
  const navigate = useNavigate()
  const { user } = useAuth();
  const userObj = JSON.parse(user);

  useEffect(() => {
    const fetchDetails = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${userObj.user.email}`, { method: "GET" })
        if (response.status !== 200) return;

        const { details } = await response.json();
        setDetails(details);
        // console.log(details);
    }
    fetchDetails();
}, []);
  
  const {
    poster,
    name,
    summary,
    venue,
    description,
    event_manager,
    registration_fee,
    rounds,
    prize_money,
    no_of_prizes,
    social_media,
    rules,
    judging_criteria,
    schedule,
    registered,
    disqualification,
    category,
    reg_form_link
  } = props.data;

  const [details , setDetails] = useState({})





  var perspective = "500px",
    delta = window.innerHeight / 2;

  const parseTime = (t) => {
    t = parseInt(t);
    if (t > 12) return t - 12 + "PM";
    else return t + "AM";
  };

  const handleRegister = () =>{
    if(!(details.paidForRegDay1 || details.paidForRegDay2 || details.paidForRegDay3)){
      navigate('/auth');
    }
    else{
      window.open(reg_form_link);
    }
  }


  return (
    <div className="d-card flex flex-col md:flex-row ">
      <div className="d-img-container">
        <img
          src={poster ? poster : "../../images/sample.jpg"}
          className="d-card-img"
          onMouseMove={(e) => {
            let t = e.target;
            if (!t || t.classList[0] !== "d-card-img") return;
            var cursPosX = e.pageX - t.offsetLeft + t.parentElement.offsetLeft,
              cursPosY = e.pageY - t.offsetTop + t.parentElement.offsetTop,
              cursCenterX = t.offsetWidth / 2 - cursPosX,
              cursCenterY = t.offsetHeight / 2 - cursPosY;

            t.style.transform =
              "perspective(" +
              perspective +
              ") rotateX(" +
              cursCenterY / delta +
              "deg) rotateY(" +
              -(cursCenterX / delta) +
              "deg)";
            t.classList.remove("is-out");
          }}
          onMouseLeave={(e) => {
            e.target.classList.add("is-out");
          }}
          alt="event_poster"
        />
      </div>

      <div class="text-white px-8 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
        <h2 class=" text-[#f7ca17] text-3xl font-[800] title-font mb-1">{name}</h2>

        <div class="flex mb-4">
          <span class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-current-location" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="3" />
              <circle cx="12" cy="12" r="8" />
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="2" y1="12" x2="4" y2="12" />
            </svg>
            <span class="text-gray-600 ml-3">{venue}</span>
          </span>
          {social_media && (
            <div className="social text-xl font-bold flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              {social_media.split("\n").map((social) => {
                const [type, link] = social.split(",");
                return (
                  <a className="mr-2" target="_blank" rel="noreferrer" key={social} href={link}>
                    <i className={`fab fa-${type}`}> </i>
                  </a>
                );
              })}
            </div>
          )}
        </div>
        <div className="details md:max-h-[430px]">
          {description && (
            <div className="description">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
                <h2 className="text-xl font-bold ml-2">Description</h2>

              </div>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
            </div>
          )}

          <hr className="mt-4" />
          {(prize_money || rounds || no_of_prizes) && <div class="flex mt-6 items-center pb-5 mb-5">
            {prize_money && (
              <div className="w-[50%]">
                <h2 className="prize-money text-lg">
                  Prize Money: <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(prize_money) }} />
                </h2>
              </div>
            )}
            <div class="flex flex-col ml-6 ">
              {rounds && (
                <div>
                  <h2 className="">
                    Rounds: <span>{rounds}</span>
                  </h2>
                </div>
              )}

              {no_of_prizes && (
                <div>
                  <h2 className="text-md">
                    No. of prize(s): <span>{no_of_prizes}</span>
                  </h2>
                </div>
              )}

            </div>
          </div>}
          {/* <hr /> */}
          {judging_criteria && (
            <div className="mb-2">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
                  <path d="M10 18h-7" />
                  <path d="M21 18h-7" />
                  <path d="M6 15l-3 3l3 3" />
                  <path d="M18 15l3 3l-3 3" />
                </svg>
                <h2 className="text-xl font-bold ml-2">Judging Criteria</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(judging_criteria) }} />
            </div>
          )}

          {rules && (
            <div className="rules mb-2">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <line x1="3" y1="6" x2="3" y2="19" />
                  <line x1="12" y1="6" x2="12" y2="19" />
                  <line x1="21" y1="6" x2="21" y2="19" />
                </svg>
                <h2 className="text-xl font-bold ml-2">Rule Book</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rules) }} />
            </div>
          )}

          {disqualification && (
            <div className="disqualification mb-2">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ban" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M5.7 5.7l12.6 12.6"></path>
              </svg>
              <h2 className="text-xl font-bold ml-2">Disqualification</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(disqualification) }} />
            </div>
          )}

          <div className="my-4">
            <div className="flex"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="5" width="16" height="16" rx="2" />
              <line x1="16" y1="3" x2="16" y2="7" />
              <line x1="8" y1="3" x2="8" y2="7" />
              <line x1="4" y1="11" x2="20" y2="11" />
              <rect x="8" y="15" width="2" height="2" />
            </svg> <h2 className="text-xl font-bold ml-2"> Schedule: </h2></div>
            <ul>
              {schedule.day1.starttime !== '' && <div className="flex mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#da1717" fill="#da1717" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
                  <line x1="9" y1="15" x2="4.5" y2="19.5" />
                  <line x1="14.5" y1="4" x2="20" y2="9.5" />
                </svg>
                <li className="ml-2 mb-2">7th April - Start Time : {schedule.day1.starttime}, Duration : {schedule.day1.duration} hrs</li>

              </div>}
              {schedule.day2.starttime !== '' && <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#da1717" fill="#da1717" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
                  <line x1="9" y1="15" x2="4.5" y2="19.5" />
                  <line x1="14.5" y1="4" x2="20" y2="9.5" />
                </svg>
                <li className="ml-2 mb-2">8th April - Start Time : {schedule.day2.starttime}, Duration : {schedule.day2.duration} hrs</li>

              </div> }
              {schedule.day3.starttime !== '' && <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#da1717" fill="#da1717" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
                  <line x1="9" y1="15" x2="4.5" y2="19.5" />
                  <line x1="14.5" y1="4" x2="20" y2="9.5" />
                </svg>
                <li className="ml-2 mb-2">9th April - Start Time : {schedule.day3.starttime}, Duration : {schedule.day3.duration} hrs</li>

              </div>}
            </ul>
          </div>

          <hr className="my-4" />

          {event_manager && (
            <div className="event-managers mb-4">
              <div className="flex"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-speakerphone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 8a3 3 0 0 1 0 6" />
                <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
              </svg> <h2 className="ml-2 mb-2 text-xl font-bold">Event Managers</h2> </div>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event_manager) }} />
            </div>
          )}
        </div>

        <div class="flex border-t-2 border-[#f7ca17] py-4">
          <span class="title-font font-medium text-2xl text-gray-900">{registration_fee !== 0 ? `₹${registration_fee}` : "Free Event"}</span>
          {reg_form_link && <button
              className="flex bg-[#f7ca27] text-black items-center justify-center px-6 py-2  rounded-lg ml-4"
            onClick={handleRegister}
            rel="noreferrer"
            >
              Register
            </button>}
        </div>
      </div>
    </div>
  );
}

export default Details;



{/* <div className="details px-6">
  <div className="bg-white mx-4 p-4">
    <h1 className="text-4xl font-bold"></h1>
    <h2 className="text-md font-bold">{summary}</h2>



    <div className="w-[80%] m-auto">

      <div className="mdflex justify-content-between align-items-center time-venue">
        {/* <div className="time">
                {start_date && (
                  <div>
                    Start:{" "}
                    {dayjs(start_date).format("ddd, MMM D, YYYY h:mm A")}
                  </div>
                )}
                {end_date && (
                  <div>
                    End: {dayjs(end_date).format("ddd, MMM D, YYYY h:mm A")}
                  </div>
                )}
              </div> */}
//       <div className="venue text-xl font-bold">
//         Venue : {venue}
//       </div>
//       <div className="text-xl font-bold">
//         Registration Fees:{" "}
//         
//       </div>
//     </div >
//   </div >


{/* <div className="content">
  {rounds && (
    <div>
      <h2 className="text-xl font-bold">
        Rounds: <span>{rounds}</span>
      </h2>
    </div>
  )}









//   {/*  */}
// </div>
//   </div >
// </div > * /}
