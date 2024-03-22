import { useState, useEffect, useRef } from 'react';
import React from 'react';
import './index.css';
import SponsorsCard from '../Sponsors/SponsorsCard'
import Loader from '../Loader/index.js'

function Events() {

	const [evetnsInfo, setevetnsInfo] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND_URL}/api/event`)
			.then(res => res.json())
			.then(data => {
				setevetnsInfo(data);
			}).catch(console.error)
	}, [])

	const types = [...new Set(evetnsInfo.map(sponsor => sponsor.type))];
	return (
		!evetnsInfo || evetnsInfo.length === 0
			?
			<>
				< Loader />
				{/* <div style={{ marginTop: '-15rem', marginBottom: '15%' }}>
					<h1 className='flex justify-center text-pink text-4xl mb-10 '>Coming soon</h1>
				</div> */}
			</>
			:
			< div className='w-full h-auto bg-purple flex flex-col pt-4' >
				{
					types.map(type => {
						return (
							<div key={type} className='spons flex-col justify-center items-center mb-6'>
								<h1 className='flex justify-center text-pink text-4xl mb-10 mt-20'>{type}</h1>
								<div className='spons_line'>
									{evetnsInfo.filter(sponsor => sponsor.type === type).map((sponsor, index) =>
										<div key={index} className='flex justify-center'>
											<SponsorsCard {...sponsor} /></div>
									)}
								</div>
							</div>
						)
					})
				}

			</div >
	)
}


export default Events;




