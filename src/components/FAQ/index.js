import React, { useState } from "react";
import './index.css'

function FaqItem({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<h3 onClick={handleClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
				<span style={{ marginRight: '5px', marginTop: '-10px', fontWeight: 'bold' }}>{isOpen ? '-' : '+'}</span>
				<span>{question}</span>
			</h3>
			{isOpen && <p>{answer}</p>}
		</div>
	);
}

const faqs1 = [
	{
		id: 1,
		question: <h2>What is Springspree?</h2>,
		answer: <p>
			Spring Spree is the annual cultural festival held at the{" "}
			<strong>National Institute of Technology, Warangal</strong>. This
			cultural fest holds the distinction of being one of South India's
			largest. This fest has gone a long way since its humble beginnings
			in 1978, with a footfall of over 10,000 people and participation
			from around 600 universities and growing. Today's Spring Spree
			offers a diverse range of activities to appeal to a wide range of
			personalities. It includes music, dancing, literature, painting, and
			gaming of all kinds.
		</p>,
	},
	{
		id: 2,
		question: <h2>When is the fest?</h2>,
		answer: <p>
			The fest is celebrated for three consecutive days from April 7 to
			April 9 2023.
		</p>,
	},
	{
		id: 3,
		question: <h2>What are the common events?</h2>,
		answer: <p>
			The major spotlight events include:
			<ul>
				<li>Idol (A Singing Competition)</li>
				<li>Director's Cut (A Short Film Contest)</li>
				<li>Allure (A Fashion Show)</li>
				<li>Q-Factor (A Quiz Competition)</li>
				<li>NIT-MUN (A Model United Nations)</li>
			</ul>
		</p>,
	},
	{
		id: 4,
		question: <h2>
			What is the mode of conduction of the fest (Online or Offiline)?
		</h2>,
		answer: <p>Fest (Spring Spree'23) is being conducted offline.</p>,
	},
];


const faqs2 = [

	{
		id: 5,
		question: <h2>What is the process of registration?</h2>,
		answer: <p>
			Registration can be done on this website (
			<a href="https://springspree.nitw.in">springspree.nitw.in</a>) by filling
			up your details, as well offline by registering on the spot.
		</p>,
	},
	{
		id: 6,
		question: <h2>How do I confirm my registration?</h2>,
		answer: <p>You will receive an email confirmation about your registration.</p>,
	},
	{
		id: 7,
		question: <h2>How much is the entry fee?</h2>,
		answer: <p>
			There will be a fixed entry fee for other than NIT Warangal students
			to attend spree. Everyone should pay the fee for participating in
			any event mentioned by the respective event managers.
		</p>,
	},
	{
		id: 8,
		question: <h2>Who can attend the fest?</h2>,
		answer: <p>
			College students from any institute (as well as those past the 12th
			grade but have not chosen a college yet) are permitted to
			participate in Spring Spree 2023.
		</p>,
	},
];


const faqs3 = [
	{
		id: 9,
		question: <h2>What all events and competitions will be there?</h2>,
		answer: <p>
			There will be spotlight events, club events,workshops and music and
			dance competitions and many exciting events.
		</p>,
	},
	{
		id: 10,
		question: <h2>Will there be any fee to attend an event?</h2>,
		answer: <p>Yes, there will be fee to attend few events.</p>,
	},
	{
		id: 11,
		question: <h2>How to register for the particular event or competition?</h2>,
		answer: <p>
			Registration is online for a few events and offline for a few. Stay
			tuned for the further updates.
		</p>,
	},
	{
		id: 12,
		question: <h2>Will there be any cash prizes?</h2>,
		answer: <p>Yes, there are exciting cash prizes and goodies.</p>,
	},
	{
		id: 13,
		question: <h2>
			Who decides the winners and what will be the judging creteria?
		</h2>,
		answer: <p>
			Event Managers will decide the winners and candidates will be
			evaluated in each round. The one with the highest score is declared
			as the winner.
		</p>,
	},
];


const faqs4 = [
	{
		id: 14,
		question: <h2>Will I get food and accomodation?</h2>,
		answer: <p>
			Yes, both food and accomodation will be taken care by the spree team
			once after you register for the fest.
		</p>,
	},
	{
		id: 15,
		question: <h2>Is the fest open to attend for any outsiders?</h2>,
		answer: <p>Yes, the fest is open for all.</p>,
	},
];


const faqs5 = [
	{
		id: 16,
		question: <h2>What are Pro Shows?</h2>,
		answer: <p>
			Proshows are your chance to see your favorite celebrities live.
			These are concerts lined up on each night of Spree.
		</p>,
	},
	{
		id: 17,
		question: <h2>
			Who are the celebrities which are going to perform at the star
			nights of Spring Spree 2023?
		</h2>,
		answer: <p>
			Will be deeclared soon...
		</p>,
	},
];


export const FAQ = () => {
	// useTitle("FAQ - SpringSpree'23");
	return (
		<div className="FaqContainer flex h-screen flex-row justify-start items-center bg-black text-white">
			<div className="SideBar h-screen bg-gradient-to-br from-[#2925B2] to-[#BC1717] md:w-[30%] flex flex-col justify-evenly items-start p-10">
				<h1 className="text-white uppercase">Frequently Asked Questions (FAQs)</h1>
				<a href="#about">About</a>
				<a href="#reg">Registration</a>
				<a href="#comp">Events & Competitions</a>
				<a href="#accom">Food & Accomodation</a>
				<a href="#proshow">Pro Shows</a>
			</div>
			<div className="QueryContainer md:w-[70%] h-screen overflow-y-auto p-10">
				<h1 id="about" className="text-[#F7CA17] uppercase">About</h1>
				<div className="Query md:w-[70%]">
					<div>
						{faqs1.map((faq, index) => (
							<FaqItem index={index} key={faq.id} question={faq.question} answer={faq.answer} />
						))}
					</div>
				</div>
				<h1 id="reg" className="text-[#F7CA17] uppercase">Registration</h1>
				<div className="Query">
					<div>
						{faqs2.map((faq, index) => (
							<FaqItem index={index} key={faq.id} question={faq.question} answer={faq.answer} />
						))}
					</div>
				</div>
				<h1 id="comp" className="text-[#F7CA17] uppercase">Events & Competitions</h1>
				<div className="Query">
					<div>
						{faqs3.map((faq, index) => (
							<FaqItem index={index} key={faq.id} question={faq.question} answer={faq.answer} />
						))}
					</div>
				</div>
				<h1 id="accom" className="text-[#F7CA17] uppercase">Food & Accomodation</h1>
				<div className="Query">
					<div>
						{faqs4.map((faq, index) => (
							<FaqItem index={index} key={faq.id} question={faq.question} answer={faq.answer} />
						))}
					</div>
				</div>
				<h1 id="proshow" className="text-[#F7CA17] uppercase">Pro Shows</h1>
				<div className="Query">
					<div>
						{faqs5.map((faq, index) => (
							<FaqItem index={index} key={faq.id} question={faq.question} answer={faq.answer} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

