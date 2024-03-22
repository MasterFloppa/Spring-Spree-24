import Details from './Details/details.js'
import { useState, useEffect, useRef } from 'react';
import './events.css';
import Schedule from './Schedule/index.js';
import { useParams } from 'react-router-dom';

import FloatButton from "./FloatButton.js";
import Grid from './Grid/index.js'
import Loader from '../Loader/index.js'


// [{
//     "eventname": "abc",
//     "details" : "Lorem ipsum ..."
//     "schedule": {
//       "day1": {
//         "starttime": "8",
//         "duration": 3
//       },
//       "day2": {
//         "starttime": "8",
//         "duration": 4
//       },
//       "day3": {
//         "starttime": "8",
//         "duration": 2
//       }
//     },
//     "eventposter": "image_name.jpg" 
//   },]

// image should be in public/images

const RIGHT = 39;
const LEFT = 37;
const ESC = 27;
const BACK = 8;
// const numEvents = data.eventList.length;


var c = 0;

var touchStartTime = 0;
var v = 0;
var time = 0;

const days = ['day1', 'day2', 'day3'];
const URL = `https://springspree-backend.nitw.in`
// const URL = `http://localhost:5000`

var numEvents = 0;


function Events() {

	const ref = useRef();

	const [loading, setLoading] = useState(true);

	const [width, setWidth] = useState(window.innerWidth);

	const [touchStart, setTouchStart] = useState(null);
	const [initScroll, setInitScroll] = useState(0);
	const [current, setCurrent] = useState(0);
	const [opacity, setOpacity] = useState(1);

	const [view, setView] = useState('grid');
	const [day, setDay] = useState('ALL');


	const [data, setData] = useState([]);

	const changeCurrent = (val) => {
		if (val >= numEvents) val = numEvents - 1;
		if (val < 0) val = 0;
		c = val;
		setCurrent(val);
	}


	const cardClick = (val) => {
		changeView('swipe');
		window.scrollTo(0, 0);
		changeCurrent(val);
	}

	const changeView = (view) => {
		document.body.style.zoom = 1;
		if (view === 'schedule') setDay('day1');
		setView(view);
	}


	c = current;

	// FETCH all the events
	useEffect(() => {
		const getEvents = async () => {
			const response = await fetch(`${URL}/event/all`, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				}
			})

			let data = await response.json();
		        const sortedEvents = [];
			const categories = [...new Set(eventsInfo.map(event => event.category))];
			categories.map(category=>{
				const thisCategoryEvents =eventsInfo.filter(event => event.category === category);
				sortedEvents.push(...thisCategoryEvents);
				
			})
			setData(sortedEvents);
			numEvents = data.length;
			setLoading(false);
			//setData(data);
		}

		window.addEventListener("hashchange", function (e) {
			console.log(e);
			e.preventDefault();
		})

		getEvents();
	}, [])

	useEffect(() => {
		const klisten = (e) => {
			console.log(e.keyCode);
			switch (e.keyCode) {
				case RIGHT:
					changeCurrent(c + 1);
					break;
				case LEFT:
					changeCurrent(c - 1);
					break;
				case ESC:
				case BACK:
					changeView('grid');
			}
		}
		const resize = () => {
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize', resize);
		document.addEventListener('keydown', klisten);
		return () => { document.removeEventListener('keydown', klisten); }
	}, []);


	return (loading ? <Loader /> :
		<div className='events bg-black'
			onMouseMove={() => {
				setOpacity(1);
				if (time) clearTimeout(time);
				time = setTimeout(() => {
					setOpacity(0);
				}, 2000);
			}}>
			<div>{
				view === 'swipe' ?
					<>
						<div style={{ height: window.innerHeight - 64 }}>
							<div className='outer'>
								<div className='swipe' ref={ref}
									style={{ width: numEvents * window.innerWidth + 10, left: - current * window.innerWidth }}
									onTouchStart={
										(e) => {
											if (isNaN(parseInt(ref.current.style.left))) ref.current.style.left = 0;
											if (ref.current) {
												setInitScroll(parseInt(ref.current.style.left));
												ref.current.style.transition = 'none';
											}
											touchStartTime = e.timeStamp;
											setTouchStart(e.targetTouches[0].clientX);
										}
									}
									onTouchMove={(e) => {
										// normal scroll
										const curr = e.targetTouches[0].clientX;
										if (ref.current) {
											let d = curr - touchStart;
											let s = initScroll + 1.2 * d;
											if (s > 50) s = 50;
											if (s < - (numEvents - 1) * window.innerWidth - 50) s = - (numEvents - 1) * window.innerWidth - 50;

											if (d > 50 || d < -50)
												ref.current.style.left = s + 'px';
										}
										v = (curr - touchStart) / (e.timeStamp - touchStartTime);
									}}
									onTouchEnd={(e) => {
										ref.current.style.transition = 'all 0.4s';
										//0, -width, -2*width
										let s = - parseInt(ref.current.style.left);
										let offset = 0;

										if (Math.abs(-s - initScroll) > 50 && v > 1) offset = -1;
										if (Math.abs(-s - initScroll) > 50 && v < -1) offset = 1;
										s = Math.round(s / width) + offset;
										changeCurrent(s);
										ref.current.style.left = - s * window.innerWidth + 'px';

										setOpacity(0);
									}}>
									{data?.map((event, index) => <div key={index} className='d-card-outer'><Details data={event} current={index === c} /></div>)}
								</div>
							</div>
							{current === data?.length - 1 ? '' : <span className='arrow-outer' onClick={() => changeCurrent(c + 1)} style={{ opacity: opacity, right: 0, animation: (current === 0 ? 'click 1s infinite' : '') }}><i className="arrow fa-solid fa-caret-right"></i></span>}
							{current === 0 ? '' : <span className='arrow-outer' onClick={() => changeCurrent(c - 1)} style={{ opacity: opacity, left: 0 }}><i className="arrow fa-solid fa-caret-left "></i></span>}
						</div>
					</>
					:
					view === 'schedule' ?
						<Schedule state={view} viewDetails={cardClick} day={day} days={days} changeDay={setDay} data={data} />
						:
						<Grid day={day} days={days} changeDay={setDay} data={data} onclick={cardClick} />
			}
			</div>
			<FloatButton current={view} zoom={1} onclick={changeView} />
		</div>
	);
}


export default Events;




