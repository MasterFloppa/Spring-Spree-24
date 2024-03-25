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

//Hardcoded data
// const HardEvents = [
// 	{ name: "Sex", photo: "https://m.media-amazon.com/images/M/MV5BYmM2ZjBiYzUtNDU2Zi00MGMzLWIyY2MtY2IxNTFjYTFhYjE3XkEyXkFqcGdeQXVyMjIzODI1ODM@._V1_.jpg", type: "Music Club", },
// 	{ name: "Duck", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqhrNbk2U2ma00x0ZZKeGvkww8mU_X7avVCJ-_eSX1FRTg0WO", type: "Music Club", },
// 	{ name: "Nigger", photo: "https://i.pinimg.com/736x/ea/70/30/ea70303a0f812ef794f4ac672b282538.jpg", type: "LDC" },
// ]

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
											<EventsCard {...sponsor} /></div>
									)}
								</div>
								{type === 'Music Club' &&
									<>
										<div className='flex justify-center'>
											<h1 className='text-pink text-3xl mt-6 mb-2'>Important Links</h1>
										</div>
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
			</div >
	)
}


export default Events;




