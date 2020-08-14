import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Titleandsearch = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand col-xs-6 col-md-4" href="#">
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-vector%2Fcute-funny-happy-vegetables-fruits_1270-440.jpg&f=1&nofb=1"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt=""
					loading="lazy"
				/>
				Website title name
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="col-6">
				<form className="form-inline">
					<input className="form-control mr-2 col-8" type="search" placeholder="" aria-label="Search" />
					<button className="btn btn-outline-dark my-2 my-0" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};
export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-success">
			<a className="navbar-brand" href="#">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgL76ptpnEisIFdlMX8vfR2gp6H7re5JbkhQ&usqp=CAU"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt=""
					loading="lazy"
				/>
				Website title name
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Community Recipes
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Username
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								My Recipes
							</a>
							<a className="dropdown-item" href="#">
								My Reviews
							</a>
							<a className="dropdown-item" href="#">
								My Favorites
							</a>
							<a className="dropdown-item" href="#">
								Rewards
							</a>
							<div className="dropdown-divider" />
							<a className="dropdown-item" href="#">
								Logout
							</a>
						</div>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search" />
					<button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};
