import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
// import { useUserAuth } from "../../context/userAuthContext";

import springspree from "./springspree2.png";
import './index.css';

const isMobileView = window.innerWidth <= 725;
const oldNavigation = [
	{ name: "HOME", link: "/" },
	{ name: "EVENTS", link: "/events" },
	// { name: "SPONSORS", link: "/sponsors" },
	{ name: "TEAM", link: "/team" },
	{ name: "FAQs", link: "/faq" },
	// { name: "PRO SHOWS", link: "/proshows" }
];

export default function Navbar() {
	const [navigation, setNavigation] = useState(oldNavigation);
	const [menuOpen, setMenuOpen] = useState(false);				//for hamburger menu
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 725);

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth <= 725);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (isMobileView) {
			setNavigation([...oldNavigation, { name: "REGISTER", link: "/auth" }]);
		} else {
			setNavigation(oldNavigation);
		}
	}, [isMobileView]);

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

	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const closeDropdown = () => {
		setDropdownOpen(false);
	};

	const listItems = navigation.map((menuItem, index) => {
		if (menuItem.name === "EVENTS") {
			return (
				<li key={index} className="dropdown-menu">
					<a to="#" onClick={toggleDropdown} style={{ color: '#f4d4d8' }}>{menuItem.name} {dropdownOpen ? '▲' : '▼'}</a>
					<ul className="dropdown-content" style={{ display: dropdownOpen ? 'block' : 'none' }}>
						<li ><NavLink to="/proshows" onClick={() => { closeMenu(); closeDropdown(); }}>PRO SHOWS</NavLink></li>
						<li ><NavLink to={menuItem.link} onClick={() => { closeMenu(); closeDropdown(); }}>EVENTS</NavLink></li>
					</ul>
				</li >
			);
		} else {
			return (
				<li key={index}>
					<NavLink to={menuItem.link} onClick={() => { closeMenu(); closeDropdown(); }}>{menuItem.name}</NavLink>
				</li>
			);
		}
	});

	return (
		<>
			{!menuOpen ? (
				<div className="logo">
					<Link to="./" onClick={closeMenu}>
						<img src={springspree} alt="logo1" />
					</Link>
				</div>
			) : (null
			)}
			<nav className={menuOpen ? 'menu-open' : 'menu-closed'}>
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
							<li style={{ fontSize: '1.2rem' }}>
								<NavLink to="/auth" onClick={closeMenu}>
									Register
								</NavLink>
							</li>
						</ul>
					)}
				</div>
			</nav >

		</>
	);
}