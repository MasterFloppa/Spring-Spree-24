import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
// import { useUserAuth } from "../../context/userAuthContext";

import springspree from "./springspree2.png";
import './index.css';


const navigation = [
	{ name: "HOME", link: "/" },
	// { name: "ABOUT", href: "#", current: str == "about" },
	{ name: "EVENTS", link: "/events" },
	{ name: "SPONSORS", link: "/sponsors" },
	// { name: "BLOGS", href: "/blogs", current: str === "blogs" },
	{ name: "TEAM", link: "/team" },
	{ name: "FAQs", link: "/faq" },
	// { name: "MAKE YOUR DP", href: "https://springspree-frame.nitw.in", current: str === "frame" },
	// { name: "PRO SHOWS", link: "/proshows" }
];

export default function Navbar() {

	const [menuOpen, setMenuOpen] = useState(false);				//for hamburger menu
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const { user, logOut } = useUserAuth();	//for backend integration

	// useEffect(() => {
	// 	if (user) {
	// 		setIsLoggedIn(true);
	// 	} else {
	// 		setIsLoggedIn(false);
	// 	}
	// }, [user])

	// async function handleLogOut() {
	// 	await logOut();
	// 	setIsLoggedIn(false);
	// }

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const listItems = navigation.map((menuItem, index) => {
		if (menuItem.name === "EVENTS") {
			return (
				<li key={index} className="dropdown-menu">
					<NavLink to={menuItem.link} onClick={closeMenu}>{menuItem.name} ▼</NavLink>
					<ul className="dropdown-content">
						<li ><NavLink to="/proshows">PRO SHOWS</NavLink></li>
						<li ><NavLink to="/event2">Event 2</NavLink></li>
					</ul>
				</li>
			);
		} else {
			return (
				<li key={index}>
					<NavLink to={menuItem.link} onClick={closeMenu}>{menuItem.name}</NavLink>
				</li>
			);
		}
	});

	return (
		<>
			<nav>
				<div
					className="menu"
					onClick={() => {
						setMenuOpen(!menuOpen);
					}}
				>
					{
						(menuOpen) ? (
							<ImCross className='cross' />
						) :
							<>
								<span className={menuOpen ? '' : 'ham'}></span>
								<span className={menuOpen ? '' : 'ham'}></span>
								<span className={menuOpen ? '' : 'ham'}></span>
							</>
					}

				</div>
				{/* <div> */}
				<ul className={menuOpen ? "open" : ""}>{listItems}</ul>
				{/* </div> */}

				<div className="title">
					<Link to="./" onClick={closeMenu}>
						<img src={springspree} alt="logo1" />
					</Link>
				</div>

				<div className="reg-login">
					{isLoggedIn ? (
						<button
							onClick={() => {
								// handleLogOut();
							}}
						>
							Log Out
						</button>
					) : (
						<ul style={{ justifyContent: 'flex-end' }}>
							<li>
								<NavLink to="/auth" onClick={closeMenu}>
									Register/Login
								</NavLink>
							</li>
						</ul>
					)}
				</div>
			</nav >
		</>
	);
}