import React from "react";
import { Link } from "react-router-dom";
import nine from "../../img/logo.jpg"
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar bg-black sticky-top">
			<div classname="brand">
			<Link to="/">
				<img className="logo" src={nine}/>
			</Link>
			<h9 className="number">πΎπΌππ ππ πππΏπΌπ ! <a href="tel:(786)-296-4730">(786)-296-4730</a><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ππ§ππ ππ¨π©ππ’ππ©ππ¨ !</h9>

			</div>
			<div className="options justify-content-end">
			
			<Link to="/">
				<button className="button">Home</button>
			</Link>
				<Link to="/aboutus">
					<button className="button">About Us</button>
				</Link>
				<Link to="/gallery">
					<button className="button">Gallery</button>
				</Link>
				<Link to="/services">
					<button className="button">Services</button>
				</Link>
				<Link to="/contact">
					<button className="button">Request Quote</button>
				</Link>
			</div>
		</nav>
	);
};
