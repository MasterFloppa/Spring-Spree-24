import React, { useEffect, useState } from 'react'
import FAQS_Mobile from './FAQs_Mobile';
import FAQS_Large from './FAQS_Large';

function FAQ() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div>
			{screenWidth <= 1020 ? (
				<FAQS_Mobile />
			) : (
				<FAQS_Large />
			)}
		</div>
	)
}

export default FAQ