import React from 'react'
import "./Sponsors.css"

function SponsorsCard({
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
					<img className='object-cover' src={photo} alt='spons-card' />
					{/* </a> */}
				</div>
			</div>
			<div className='text-pink text-2xl mt-6 mb-10 flex justify-center'>{name}</div>
			{/* Add the description of the event */}
			{/* Add venue here */}
		</div>
	)
}

export default SponsorsCard