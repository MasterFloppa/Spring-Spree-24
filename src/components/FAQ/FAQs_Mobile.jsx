import React from 'react'
import FAQMobileSkeleton from './FAQ_Mobile_Skeleton'
import "./FAQs_Mobile.css"
function FAQS_Mobile() {
	const faqs = [
		{
			title: "What is Springspree?",
			content: "Spring Spree is the annual cultural festival held at the National Institute of Technology, Warangal. This cultural fest holds the distinction of being one of South India's largest. This fest has gone a long way since its humble beginnings in 1978, with a footfall of over 10,000 people and participation from around 600 universities and growing. Today's Spring Spree offers a diverse range of activities to appeal to a wide range of personalities. It includes music, dancing, literature, painting, and gaming of all kinds."
		},
		{
			title: "When is the fest?",
			content: "The fest is celebrated for three consecutive days from April 5 to April 7 2024."
		},
		{
			title: "What are the common events?",
			content: "The major spotlight events include: Idol (A Singing Competition), Director's Cut (A Short Film Contest), Allure (A Fashion Show), Q-Factor (A Quiz Competition), NIT-MUN (A Model United Nations)"
		},
		{
			title: "What is the mode of conduction of the fest?",
			content: "Fest (Spring Spree'24) is being conducted offline."
		},
	];
	const faqs1 = [
		{
			title: "What is the process of registration?",
			content: "Registration can be done through the google form provided in the registration page, by filling up your details, as well offline by registering on the spot."
		},
		{
			title: "How do I confirm my registration?",
			content: "You will receive an email confirmation about your registration."
		},
		{
			title: "How much is the entry fee?",
			content: "There will be a fixed entry fee for other than NIT Warangal students to attend spree. Everyone should pay the fee htmlFor participating in any event mentioned by the respective event managers."
		},
		{
			title: "Who can attend the fest?",
			content: "College students from any institute (as well as those past the 12th grade but have not chosen a college yet) are permitted to participate in Spring Spree 2024."
		},
	];
	const faqs2 = [
		{
			title: "What all events and competitions will be there?",
			content: "There will be spotlight events, club events, workshops as well as music and dance competitions, and many other exciting events"
		},
		{
			title: "Will there be any fee to attend an event?",
			content: "Yes, there will be a fee to attend few events."
		},
		{
			title: "Will there be any cash prizes?",
			content: "No, there are NO cash prizes but a lot of exciting goodies."
		},
		{
			title: "Who decides the winners and what will be the judging creteria?",
			content: "Event Managers will decide the winners and candidates will be evaluated in each round. The one with the highest score is declared as the winner."
		},
	];
	const faqs3 = [
		{
			title: "Will I get food and accomodation?",
			content: "No, only accomodation will be taken care by the spree team once after you register for the fest."
		},
		{
			title: "Is the fest open to attend for any outsiders?",
			content: "Yes, the fest is open for all."
		},
	];
	const faqs4 = [
		{
			title: "What are Pro Shows?",
			content: "Proshows are your chance to see your favorite celebrities live. These are concerts lined up on each night of Spree."
		},
		{
			title: "Which celebrities are going to perform at the star nights of Spring Spree 2024?",
			content: "Will be deeclared soon..."
		},
	];
	return (
		<div className='bg-purple w-full flex flex-col justify-center'>
			<div className='flex text-3xl text-pink justify-center text-center font-aftersick mt-32'>FAQS</div>
			<div className='flex flex-col justify-center faq_div'>
				<div className='flex justify-start text-purple font-aftersick text-xl ml-2 mt-4 mb-2 md:text-2xl'>About</div>
				{
					faqs.map((curElem, index) => {
						const { id } = curElem;
						return <FAQMobileSkeleton index={index} key={id} {...curElem} />
					})
				}
			</div>
			<div className='flex flex-col justify-center faq_div'>
				<div className='flex justify-start text-purple font-aftersick text-xl ml-2 mt-4 mb-2 md:text-2xl'>Registration</div>
				{
					faqs1.map((curElem, index) => {
						const { id } = curElem;
						return <FAQMobileSkeleton index={index} key={id} {...curElem} />
					})
				}
			</div>
			<div className='flex flex-col justify-center faq_div'>
				<div className='flex justify-start text-purple font-aftersick text-xl ml-2 mt-4 mb-2 md:text-2xl'>Events & Competitions</div>
				{
					faqs2.map((curElem, index) => {
						const { id } = curElem;
						return <FAQMobileSkeleton index={index} key={id} {...curElem} />
					})
				}
			</div>
			<div className='flex flex-col justify-center faq_div'>
				<div className='flex justify-start text-purple font-aftersick text-xl ml-2 mt-4 mb-2 md:text-2xl'>Food & Accomdation</div>
				{
					faqs3.map((curElem, index) => {
						const { id } = curElem;
						return <FAQMobileSkeleton index={index} key={id} {...curElem} />
					})
				}
			</div>
			<div className='flex flex-col justify-center faq_div'>
				<div className='flex justify-start text-purple font-aftersick text-xl ml-2 mt-4 mb-2 md:text-2xl'>Pro Shows</div>
				{
					faqs4.map((curElem, index) => {
						const { id } = curElem;
						return <FAQMobileSkeleton index={index} key={id} {...curElem} />
					})
				}
			</div>
		</div>
	)

}

export default FAQS_Mobile