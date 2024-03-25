import React from 'react'
import "./EventsCard.css"

function EventsCard({
	name,
	link,
	desc,
	type,
	photo,
	venue,
}) {
	console.log({ name, photo })

	return (
		<div className='flex flex-col justify-center'>
			<div className='box mx-8'>
				<div>
					{/* <a href={link}> */}
					<img className='clogo object-cover' src={photo} alt='spons-card' />
					{/* </a> */}
				</div>
			</div>
			<div className='texti text-pink text-2xl mt-6 mb-10 flex justify-center'>{name}</div>
		</div>
	)
}

export default EventsCard