
import React, { useEffect, useState } from "react";
import SponsorsCard from './SponsorsCard'
import "./Sponsors.css"
import Loader from '../Loader/index.js'


function Sponsors() {


	const [sponsorsInfo, setSponsorsInfo] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND_URL}/sponsor`)
			.then(res => res.json())
			.then(data => {
				setSponsorsInfo(data);
			}).catch(console.error)
	}, [])

	const types = [...new Set(sponsorsInfo.map(sponsor => sponsor.type))];
	return (!sponsorsInfo ? <Loader /> :
		<div className='w-full h-auto bg-purple flex flex-col pt-4'>
			{
				types.map(type => {
					return (
						<div key={type} className='spons flex-col justify-center items-center'>
							<h1 className='flex justify-center text-pink text-4xl mb-10 mt-20'>{type}</h1>
							<div className='spons_line'>
								{sponsorsInfo.filter(sponsor => sponsor.type === type).map((sponsor, index) =>
									<div key={index} className='flex justify-center'>
										<SponsorsCard {...sponsor} /></div>
								)}
							</div>
						</div>
					)
				})
			}

		</div>
	)
}

export default Sponsors