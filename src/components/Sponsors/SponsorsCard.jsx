import React from 'react'
import Image from "../../sponsors/curr/springspree22_78.jpeg"
import "./Sponsors.css"

function SponsorsCard({
	name,
	type,
	photo,
	link
}) {
	console.log({ name, photo })
	return (
			// <div className='flex flex-col'>
			// 	<div className='box mx-8'>
			// 		<div>
			// 			<img className='object-cover' src={image} alt='spons-card' />
			// 		</div>
			// 	</div>
			// 	<div className='text-pink text-2xl mt-12 mb-10 flex justify-center'>{text}</div>
			// </div>
		<div className='flex flex-col justify-center'>
			<div className='box mx-8'>
				<div>
					<img className='object-cover' src={photo} alt='spons-card' />
				</div>
			</div>

			<div className='text-pink text-2xl mt-12 mb-10 flex justify-center'>{name}</div>

		</div>
	)
}

export default SponsorsCard