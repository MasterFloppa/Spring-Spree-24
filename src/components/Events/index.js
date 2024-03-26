import { useState, useEffect } from 'react';
import React from 'react';
import './index.css';
import EventsCard from '../Events/EventsCard'
import Loader from '../Loader/index.js'


const pdfLinks = [
	{ name: 'Rule Book', link: 'rules.pdf' },
	{ name: 'Battle of Bands', link: 'BOB.pdf' },
	{ name: 'Solo Idol', link: 'SI.pdf' },
	{ name: 'Rap Idol', link: 'RI.pdf' }
]


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
							<div key={type} className='spons flex-col justify-center items-center mb-6'  style={{ 'z-index': '2' }}>
								<h1 className='flex justify-center text-pink text-4xl mb-10 mt-20'>{type}</h1>
								<div className='spons_line'>
									{evetnsInfo.filter(sponsor => sponsor.type === type).map((sponsor, index) =>
										<div key={index} className='flex justify-center'>
											<EventsCard {...sponsor} />
										</div>
									)}
								</div>
								{type === 'Music Club' &&
									<>
										<div className='boxi flex  justify-around items-center text-pink text-2xl mt-6 mb-10 '>

											{pdfLinks.map((pdf, index) => {
												return (
													<button key={index} className='buttoni' onClick={() => openPDF(pdf.link)}>{pdf.name}</button>
												)
											})}
										</div>
									</>
								}
							</div>
						)
					})
				}
				<div className='bg-rot1'>
					<Loader />
				</div>
				<div className='bg-rot2'>
					<Loader type={true} />
				</div>
			</div >
	)
}


export default Events;




