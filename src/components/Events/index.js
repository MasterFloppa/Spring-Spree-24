import { useState, useEffect, useRef } from 'react';
import React from 'react';
import './index.css';
import SponsorsCard from '../Sponsors/SponsorsCard'
import Loader from '../Loader/index.js'

const MainPDF  = 'rules.pdf';
const BOBPDF = 'BOB.pdf';
const RIPDF = 'RI.pdf';
const SIPDF = 'SI.pdf';

function Events() {

	const [evetnsInfo, setevetnsInfo] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND_URL}/api/event`)
			.then(res => res.json())
			.then(data => {
				setevetnsInfo(data);
			}).catch(console.error)
	}, [])

	function openPDF(PDFlink) {
		window.open(`${process.env.REACT_APP_BACKEND_URL}/api/media/${PDFlink}`);
		console.log(PDFlink);
	}
    
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
								{type === 'Music Club' &&
								<>
								<div className='flex justify-center'>
									<h1 className='text-pink text-3xl mt-6 mb-2'>Important Links</h1>
								</div>
									<div className='boxi flex  justify-around items-center text-pink text-2xl mt-6 mb-10 '>
					
										<button className='buttoni' onClick={() => openPDF(MainPDF)}>Rule Book</button>
										<button className='buttoni' onClick={() => openPDF(BOBPDF)}>Battle of Bands</button>
										<button className='buttoni' onClick={() => openPDF(SIPDF)}>Solo Idol</button>
										<button className='buttoni' onClick={() => openPDF(RIPDF)}>Rap Idol</button>
									</div>
									</>
								}

							</div>
						)
					})
				}

			</div >
	)
}


export default Events;




